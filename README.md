# Exploratory Data Analysis
One of the first challenges related to exploring our target variable was determining how to handle multiple CSVs in Pandas.  Upon researching this topic, I found that a Pandas module called glob could read in multiple files at once, which could be stored in a list and subsequently concatenated into one DataFrame.  I utilized the head and describe methods to view the DataFrame and the data's descriptive statistics.  This DataFrame originally consisted of about two million rows, and what stood out the most were the minimum and maximum values.  The minimum value of these datasets was -92918, and the maximum was 1511.  Time cannot be negative, and a ride wait time of about 25 hours did not seem realistic.  Both of the rows containg these values were dropped, and `df.describe()` was called again to determine if any other strange values existed.  One other wait time recorded was 952 minutes, which also did not seem realistic as a ride wait time.  The row containing this value was dropped as well.  The other thing I noticed was the mean wait time being just over three minutes higher than median wait time.  Although this does not seem like a large difference as far as time, it indicated to me that these datasets may not be normally distributed.  This would be logical, because longer than normal wait times can occur, but no wait times can be less than zero.

Another challenge my group and I discussed was the fact that the number of actual wait time observations were not consistent from day to day and ride to ride.  We decided that before I continued data cleaning, each ride should have a mean value calculated by day.  We felt this would yield more consistent data for our target variable, so a separate notebook was used to loop through each dataset to calculate a grouped mean.  This was done with the following code:
```
aggregated_files = []

for file in all_files:
    df = pd.read_csv(file, header=0)

    df = df.drop(df.loc[(df['SACTMIN'] == -92918) |\
                (df['SACTMIN'] == 1511) |\
                (df['SACTMIN'] == 952)])
    df2 = df.groupby(['date', 'ride_name']).mean()
    
    aggregated_files.append(df2)

df = pd.concat(aggregated_files, axis=0)
df.to_csv(export_path, sep=',', index=True)
```
My outlier values had to be dropped within this loop to avoid calculating mean values with them.  The `df.groupby()` operation was used to group the DataFrame by date and ride_name before calculating the mean.  An empty list had each aggregated DataFrame appended to it, and the files could then be concatenated and exported as a single CSV file.


