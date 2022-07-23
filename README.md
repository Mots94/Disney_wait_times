# Disney Wait Times: Predictive Modeling

## Project Overview
Disney World is the happiest place on earth, but waiting in long lines is a pain.  Wait times for Disney World rides can either make or break attendees' plans for their days.  If there was a way to predict historical wait times, parkgoers could plan a trip to Disney and potentially use their time more efficiently.  This analysis will utilize multiple datasets containing estimated wait times for eight of the most popular rides at Disney's Magic Kingdom, as well as an accompanying metadata dataset that contains the feature set for analysis.  

## Data source
The data collected for this project was sourced from https://touringplans.com/walt-disney-world/crowd-calendar#DataSets. Ride wait time datasets were stored in CSV files for each individual ride.  Each CSV for ride wait times was organized with the same column format.  The files had four columns with the names 'date', 'datetime', 'SPOSTMIN', and 'SACTMIN.'  The columns 'SPOSTMIN' and 'SACTMIN' represent the standby posted wait time and the actual wait time respectively.  Before any data cleaning was done on these files, a column called 'ride_name' was added to represent the ride's name.  Since each file has the same format, the purpose of this column was as an identifier for the wait time rows after all files were aggregated together for cleaning.

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