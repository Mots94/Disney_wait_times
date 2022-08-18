# Disney Wait Times: Predictive Modeling

## Project Overview
Disney World is the happiest place on earth, but waiting in long lines is a pain.  Wait times for Disney World rides can either make or break attendees' plans for their days.  If there was a way to predict historical wait times, parkgoers could plan a trip to Disney and potentially use their time more efficiently.  This analysis will utilize multiple datasets containing actual wait times for eight of the most popular rides at Disney's Magic Kingdom, as well as an accompanying metadata dataset that contains the feature set for analysis.  We hope to answer some of the following questions in our analysis:
* Are variables such as weather, holidays, or schools in session related to ride wait times at Disney's Magic Kingdom?
* Can Magic Kingdom ride wait times be predicted by weather, holidays, or schools in session?
* If predictions can be made, which times thoughout the year are best to visit Magic Kingdom to experience lower ride wait times?

## Data source
The data collected for this project was sourced from https://touringplans.com/walt-disney-world/crowd-calendar#DataSets. Ride wait time datasets were stored in CSV files for each ride, and column names were the same in these files.  The four columns included were 'date', 'datetime', 'SPOSTMIN', and 'SACTMIN.'  The columns 'SPOSTMIN' and 'SACTMIN' represent the standby posted wait time and the actual wait time respectively.  Before any data cleaning was done on these files, a column called 'ride_name' was added to represent the ride's name.  Since each file has the same format, the purpose of this column was as an identifier for the wait time rows after all files were aggregated together for cleaning.

## Exploratory data analysis
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
My outlier values had to be dropped within this loop to avoid calculating mean values with them.  The `df.groupby()` operation was used to group the DataFrame by date and ride_name before calculating the mean.  An empty list had each aggregated DataFrame appended to it, and the files could then be concatenated and exported as a single CSV file.  This CSV was imported into a Pandas DataFrame for further analysis.  As expected, the distribution of actual wait times for this dataset was not normally distributed, as seen below.

![dist](https://github.com/Mots94/Disney_wait_times/blob/EDA_wait_times/Images/wait_time_dist_means.PNG)

## Machine learning model
We chose a Balanced Random Forest Classifier model to identify which feature of the dataset the wait time variable is most dependent on.

* The average temperature for the day accounted for 14.5% of the weight dependency.
* The day of the year accounted for 13.4%.
* The percentage of schools in session across the US accounted for 11.9%.

## Summary of Findings
Our top three results for influencing factors come in at a total of 39.8% weight dependency. This means that there are over 60% of factors unaccounted for to be able to accurately predict future wait times in any fashion. Future investigation, if given access to propriety information, should include total park attendance by day as this seems to be the most likely factor that we were unable to take into account during our investigation. 


## Citations
"7_dwarfs_train.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"big_thunder_mtn.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"haunted_mansion.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"it_s_a_small_world.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"peter_pan_s_flight.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"pirates_of_caribbean.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"space_mountain", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"splash_mountain.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022.

"metadata.csv", Disney World Ride Wait Time Datasets, TouringPlans.com, June 2018, 
    https://www.touringplans.com/walt-disney-world/crowd-calendar/#DataSets, Accessed 5 July 2022. 
