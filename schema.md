# Disney Trends Schema

## ERD Overview
We have two primary data sources. One is listed as Wait_Times, one is listed as Features. 

### Wait_Times Table
- Date will be the primary key as there will be one entry per day for each ride's wait time, and will be a date field.
- Ride_Name will identify which wait time belongs to which ride, and will be a varchar(75) field.
- Wait_Time will hold the wait time measurement as an integer.

### Features Table
- Date wil be the primary key as there will be one entry per day, and will be a date field.
- Avg_Temp will provide the average temperature for that day, and will be an integer field.
- Local_Schools_In_Session will identify if a majority of schools are in session, and will be a boolean field. 
- Season will identify if there is a known holiday season occurring specific to WDW, and will be a varchar(50) field.