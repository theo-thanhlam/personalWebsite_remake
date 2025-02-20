# Spotify Genre Pipeline
## Introduction
An ETL (Extract, Transform, Load) pipeline designed to search for tracks by genre on Spotify. It orchestrates data from Spotify API to local database through a series of scripts. It uses various Python libraries: *requests* for extracting data from api, *Pandas* for data manipulation and cleaning, *SQLAlchemy* to connect to database and load data.The pipeline performs the following tasks:  
1. **Extract**: Fetches data from the Spotify API, including tracks, albums, and artist details based on a specified genre.
2. **Transform**: Processes and structures the extracted data into a format suitable for loading into a database. This includes creating dataframes for tracks, albums, artists, and their relationships  
**Filter**: Filter out duplicate values in main tables: track, artist and album
3. **Load**: Insert the transformed data into PostgreSQL database

All of these will be automated by CRON task. 
## Project Components
### Structure
```
.
├── README.md
├── create_table.sql
├── cron.log
├── log
│   └── {today}.log
├── main.py
├── requirements.txt
├── setup.sh
└── utils
    ├── __init__.py
    ├── database
    │   ├── __init__.py
    │   └── db.py
    ├── logger
    │   └── __init__.py
    ├── pipeline
    │   ├── __init__.py
    │   ├── extract.py
    │   ├── load.py
    │   └── transform.py
    └── spotify
        ├── __init__.py
        └── authentication.py
```
`utils`: a collection of utility submodules that handle ETL pipeline aspects  
- `database`: Manage database connections and session using SQLAlchemy
- `logger`: Handles logging for the project
- `pipeline`: Contains the core ETL logic  
    - `extract`: Handles the extraction of data from Spotify API
    - `transform`: Processess and transforms the extracted data into suitable format for loading
    - `load`: Manages the loading of data into database
- `spotify`: Handle authentication with Spotify API

### Database Design
![Database Design](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/database_design.png)
There are 2 types of tables:
1. Main tables: artist, track and album
2. Relational tables: artist_track, artist_album, artist_genre, track_album

### Pipeline Explaination

![Pipeline](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/pipeline.png)

**Extract**: send a request to Spotify search endpoint that finds track by genre. In this project, I look for dubstep tracks on spotify. The response contains artist, track and album details. Therefore, I need to extract information from the API that matches my database design.
- Artist: `id`, `name`, `spotify_url`, `genres` and `image_url` in 3 sizes: 640, 320 and 160
- Album: `id`, `name`, `release_date`, `total_tracks` and `image_url` in 3 sizes: 640, 300 and 64
- Track: `id`, `name`, `spotify_url`, `duration_ms`, `explicit`, `release_date` and `is_single`  

In the API response, I can extract relational data such as artists of the track, artists of the album, artists in genres and tracks in album. These datas are stored in relational table `artist_track`, `artist_album`, `artist_genre` and `track_album` respectively

**Transform**: Transform the extracted data from previous step to dataframes. Before that, I filtered duplicate value in `artist`, `album` and `track` tables because I cannot contain duplicate values. Then I transformed to dataframe using `Pandas`

**Load**: Now the dataframe is ready to load to database. I created a connection to PostgreSQL by using `SQLAlchemy` and loaded to database using dataframe `to_sql()` function

This pipeline is automated by `crontab` where i set the task to run every hour. I added the following command to crontab editor
```bash
#Run this script every hour
* */1 * * * python3 main.py >> /path/to/cron-log/cron.log 2>&1
```
All of the process are written in log files by using `logging` library in Python. Pipeline log is written under `/log/{today}.log` where it creates new log file everyday. For crontab, it is wriiten in `cron-log/cron.log`. The examples can be found here: [Pipieline Log File](https://github.com/theo-thanhlam/spotify_etl/blob/4cdffc76756b3b320c9533d18abb8efa9fc747cc/log/2025-02-19.log), [Cron Log file](https://github.com/theo-thanhlam/spotify_etl/blob/4cdffc76756b3b320c9533d18abb8efa9fc747cc/cron.log)

## Result
Here are examples from database tables

**Track**  
![Track table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/track.png)

**Artist**  
![Artist table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/artist.png)

**Album**  
![Album table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/album.png)

**Artist_track**  
![Artist_track table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/artist_track.png)

**Artist_album**  
![Artist_album table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/artist_album.png)

**Artist_genre**    
![Artist_genre table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/artist_genre.png)

**Track_album**    
![Track_album table](https://raw.githubusercontent.com/theo-thanhlam/spotify_etl/refs/heads/main/images/track_album.png)

## Additional Information

[Source code](https://github.com/theo-thanhlam/spotify_etl)
[Medium Article](https://medium.com/@theothanhlam/restapi-to-database-a-simple-etl-pipeline-using-python-and-spotify-api-5fa56a48f880)
