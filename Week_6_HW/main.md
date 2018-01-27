

```python
from citipy import citipy
import pandas as pd
import numpy as np
import json
import requests
import matplotlib.pyplot as plt
import seaborn as sns
import datetime

now = datetime.datetime.now()
date = now.strftime("%Y-%m-%d")
```


```python
# Longitude is in the range -180 and +180 
#  latitude of 90°
countries = []
cities = []

#populate city list
for x in range(-180, 180):
    for y in range(-90, 90):
        city = citipy.nearest_city(x, y)
        country = city.country_code
        city_name = city.city_name
        cities.append(city_name)
        countries.append(country)
```


    ---------------------------------------------------------------------------

    KeyboardInterrupt                         Traceback (most recent call last)

    <ipython-input-298-a88251623ba2> in <module>()
          7 for x in range(-180, 180):
          8     for y in range(-90, 90):
    ----> 9         city = citipy.nearest_city(x, y)
         10         country = city.country_code
         11         city_name = city.city_name
    

    C:\ProgramData\Anaconda3\lib\site-packages\citipy\citipy.py in nearest_city(latitude, longitude)
         35 
         36 def nearest_city(latitude, longitude):
    ---> 37     nearest_city_coordinate = _world_cities_kdtree.search_nn((latitude, longitude, ))
         38     return WORLD_CITIES_DICT[nearest_city_coordinate[0].data]
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _wrapper(self, *args, **kwargs)
        195                     dict(func_name=f.__name__, node=repr(self)))
        196 
    --> 197         return f(self, *args, **kwargs)
        198 
        199     return _wrapper
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in search_nn(self, point, dist)
        490         """
        491 
    --> 492         return next(iter(self.search_knn(point, 1, dist)), None)
        493 
        494 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in search_knn(self, point, k, dist)
        422         results = []
        423 
    --> 424         self._search_node(point, k, results, get_dist, itertools.count())
        425 
        426         # We sort the final result by the distance in the tuple
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        457         if point[self.axis] < split_plane:
        458             if self.left is not None:
    --> 459                 self.left._search_node(point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        472                 if self.left is not None:
        473                     self.left._search_node(point, k, results, get_dist,
    --> 474                                            counter)
        475 
        476 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        457         if point[self.axis] < split_plane:
        458             if self.left is not None:
    --> 459                 self.left._search_node(point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    --> 462                 self.right._search_node(point, k, results, get_dist, counter)
        463 
        464         # Search the other side of the splitting plane if it may contain
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        468                 if self.right is not None:
        469                     self.right._search_node(point, k, results, get_dist,
    --> 470                                             counter)
        471             else:
        472                 if self.left is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    --> 462                 self.right._search_node(point, k, results, get_dist, counter)
        463 
        464         # Search the other side of the splitting plane if it may contain
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        468                 if self.right is not None:
        469                     self.right._search_node(point, k, results, get_dist,
    --> 470                                             counter)
        471             else:
        472                 if self.left is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    --> 462                 self.right._search_node(point, k, results, get_dist, counter)
        463 
        464         # Search the other side of the splitting plane if it may contain
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        457         if point[self.axis] < split_plane:
        458             if self.left is not None:
    --> 459                 self.left._search_node(point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    --> 462                 self.right._search_node(point, k, results, get_dist, counter)
        463 
        464         # Search the other side of the splitting plane if it may contain
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        457         if point[self.axis] < split_plane:
        458             if self.left is not None:
    --> 459                 self.left._search_node(point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        472                 if self.left is not None:
        473                     self.left._search_node(point, k, results, get_dist,
    --> 474                                            counter)
        475 
        476 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        468                 if self.right is not None:
        469                     self.right._search_node(point, k, results, get_dist,
    --> 470                                             counter)
        471             else:
        472                 if self.left is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    --> 462                 self.right._search_node(point, k, results, get_dist, counter)
        463 
        464         # Search the other side of the splitting plane if it may contain
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        457         if point[self.axis] < split_plane:
        458             if self.left is not None:
    --> 459                 self.left._search_node(point, k, results, get_dist, counter)
        460         else:
        461             if self.right is not None:
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        472                 if self.left is not None:
        473                     self.left._search_node(point, k, results, get_dist,
    --> 474                                            counter)
        475 
        476 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in _search_node(self, point, k, results, get_dist, counter)
        433             return
        434 
    --> 435         nodeDist = get_dist(self)
        436 
        437         # Add current node to the priority queue if it closer than
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in <lambda>(n)
        416 
        417         if dist is None:
    --> 418             get_dist = lambda n: n.dist(point)
        419         else:
        420             get_dist = lambda n: dist(n.data, point)
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in dist(self, point)
        394         """
        395         r = range(self.dimensions)
    --> 396         return sum([self.axis_dist(point, i) for i in r])
        397 
        398 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in <listcomp>(.0)
        394         """
        395         r = range(self.dimensions)
    --> 396         return sum([self.axis_dist(point, i) for i in r])
        397 
        398 
    

    C:\ProgramData\Anaconda3\lib\site-packages\kdtree.py in axis_dist(self, point, axis)
        385         the current Node and the given point
        386         """
    --> 387         return math.pow(self.data[axis] - point[axis], 2)
        388 
        389 
    

    KeyboardInterrupt: 



```python
#join lists into dataframe and remove duplicates
cities_df = pd.DataFrame(cities, columns=['City'])
cities_df = cities_df.reset_index()

countries_df = pd.DataFrame(countries, columns=['Country'])
countries_df = countries_df.reset_index()

#merge
city_df = pd.concat([cities_df, countries_df], axis=1)

#clean city_df
city_df1 = city_df
city_df1 = city_df1.drop(city_df.columns[[0, 2]], axis=1)
city_df1 = city_df1.drop_duplicates()
city_df1 = city_df1.reset_index()
city_df2 = city_df1.drop(city_df1.columns[0], axis=1)
```


```python
#sample
city_sample = city_df2.sample(564)
```


```python
#call variables
api_key = "25bc90a1196e6f153eece0bc0b0fc9eb"
url = "http://api.openweathermap.org/data/2.5/weather?"
data = {}
weather_df = pd.DataFrame()
city_number = 1
units = "imperial"

#loop through cities
for index, row in city_sample.iterrows():
    query_url = url + "appid=" + api_key + "&q=" + row['City'] + ',' + row['Country'] + "&units=" + units
    print('City ' + str(city_number) + ':' + row['City'] + '    is being processed: ' + query_url )
    weather_response = requests.get(query_url)
    try:
        weather_json = weather_response.json()
    except KeyError:
        print(row['City'] + ' was not found in weather API')
    try:
        data = {'Temperature (F)': weather_json['main']['temp'], 
                 'Humidity (%)': weather_json['main']['humidity'], 
                 'Cloudiness (%)' : weather_json['clouds']['all'], 
                'Wind Speed (mph)': weather_json['wind']['speed'],
                'City' : row['City'],
                'Country' : row['Country'],
                'Latitude' : weather_json['coord']["lat"]
                
           }
    except KeyError:
        print(row['City'] + ' was not found in weather API. Moving to next record.')
    data_df = pd.DataFrame(data, index=[0])
    data_df = data_df.set_index(data_df['City'])
    weather_df = pd.concat([weather_df, data_df], axis=0)
    city_number = city_number +1
weather_data = weather_df
weather_df = weather_df.drop_duplicates()
```

    City 1:dzheguta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dzheguta,ru&units=imperial
    City 2:lujan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lujan,ar&units=imperial
    City 3:kirkwood    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kirkwood,za&units=imperial
    City 4:durham    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=durham,us&units=imperial
    City 5:marrakesh    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marrakesh,ma&units=imperial
    City 6:tzaneen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tzaneen,za&units=imperial
    City 7:pontes e lacerda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=pontes e lacerda,br&units=imperial
    City 8:alanya    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=alanya,tr&units=imperial
    City 9:sangmelima    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sangmelima,cm&units=imperial
    City 10:znamenskoye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=znamenskoye,ru&units=imperial
    City 11:neman    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=neman,ru&units=imperial
    City 12:chirkey    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chirkey,ru&units=imperial
    City 13:bailieborough    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bailieborough,ie&units=imperial
    City 14:bikaner    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bikaner,in&units=imperial
    City 15:kostomuksha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kostomuksha,ru&units=imperial
    City 16:thomasville    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=thomasville,us&units=imperial
    City 17:fram    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=fram,py&units=imperial
    City 18:kajaani    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kajaani,fi&units=imperial
    City 19:khuldabad    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=khuldabad,in&units=imperial
    City 20:funtua    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=funtua,ng&units=imperial
    City 21:vaxjo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vaxjo,se&units=imperial
    vaxjo was not found in weather API. Moving to next record.
    City 22:oskemen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=oskemen,kz&units=imperial
    City 23:bay city    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bay city,us&units=imperial
    City 24:cururupu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cururupu,br&units=imperial
    City 25:saint john    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint john,ca&units=imperial
    City 26:codrington    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=codrington,ag&units=imperial
    codrington was not found in weather API. Moving to next record.
    City 27:amambai    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=amambai,br&units=imperial
    City 28:lar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lar,ir&units=imperial
    City 29:borba    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=borba,br&units=imperial
    City 30:taybad    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=taybad,ir&units=imperial
    City 31:bauchi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bauchi,ng&units=imperial
    City 32:salumbar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=salumbar,in&units=imperial
    City 33:cradock    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cradock,za&units=imperial
    City 34:shurugwi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=shurugwi,zw&units=imperial
    City 35:perene    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=perene,pe&units=imperial
    City 36:ozgon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ozgon,kg&units=imperial
    ozgon was not found in weather API. Moving to next record.
    City 37:cullman    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cullman,us&units=imperial
    City 38:muhos    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=muhos,fi&units=imperial
    City 39:biala podlaska    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=biala podlaska,pl&units=imperial
    City 40:arys    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=arys,kz&units=imperial
    City 41:la baneza    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=la baneza,es&units=imperial
    City 42:szentlorinc    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=szentlorinc,hu&units=imperial
    City 43:vinhedo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vinhedo,br&units=imperial
    City 44:sindor    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sindor,ru&units=imperial
    City 45:higuey    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=higuey,do&units=imperial
    higuey was not found in weather API. Moving to next record.
    City 46:patitirion    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=patitirion,gr&units=imperial
    City 47:xapuri    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=xapuri,br&units=imperial
    City 48:acara    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=acara,br&units=imperial
    acara was not found in weather API. Moving to next record.
    City 49:sumbe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sumbe,ao&units=imperial
    City 50:ouricuri    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ouricuri,br&units=imperial
    City 51:cumbernauld    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cumbernauld,gb&units=imperial
    City 52:marsassoum    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marsassoum,sn&units=imperial
    City 53:yokadouma    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yokadouma,cm&units=imperial
    City 54:campo maior    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=campo maior,br&units=imperial
    City 55:black river    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=black river,jm&units=imperial
    City 56:ntungamo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ntungamo,ug&units=imperial
    City 57:tubuala    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tubuala,pa&units=imperial
    City 58:mudbidri    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mudbidri,in&units=imperial
    City 59:westerland    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=westerland,de&units=imperial
    City 60:aventura    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=aventura,us&units=imperial
    City 61:madaoua    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=madaoua,ne&units=imperial
    City 62:amla    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=amla,in&units=imperial
    City 63:norrtalje    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=norrtalje,se&units=imperial
    City 64:naryan-mar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=naryan-mar,ru&units=imperial
    City 65:ouadda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ouadda,cf&units=imperial
    City 66:toribio    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=toribio,co&units=imperial
    City 67:marienburg    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marienburg,sr&units=imperial
    City 68:stockach    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=stockach,de&units=imperial
    City 69:francistown    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=francistown,bw&units=imperial
    City 70:arua    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=arua,ug&units=imperial
    City 71:scarborough    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=scarborough,gb&units=imperial
    City 72:arroio grande    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=arroio grande,br&units=imperial
    City 73:senj    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=senj,hr&units=imperial
    City 74:araxa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=araxa,br&units=imperial
    City 75:parana    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=parana,ar&units=imperial
    City 76:paytug    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=paytug,uz&units=imperial
    paytug was not found in weather API. Moving to next record.
    City 77:kasane    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kasane,bw&units=imperial
    City 78:marau    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marau,br&units=imperial
    City 79:morondava    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=morondava,mg&units=imperial
    City 80:rorvik    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rorvik,no&units=imperial
    City 81:antsirabe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=antsirabe,mg&units=imperial
    City 82:saint-andre-les-vergers    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint-andre-les-vergers,fr&units=imperial
    City 83:okhtyrka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=okhtyrka,ua&units=imperial
    City 84:garissa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=garissa,ke&units=imperial
    City 85:sann    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sann,pk&units=imperial
    City 86:hinche    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hinche,ht&units=imperial
    City 87:conakry    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=conakry,gn&units=imperial
    City 88:nayudupeta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nayudupeta,in&units=imperial
    City 89:verkhnyaya khava    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=verkhnyaya khava,ru&units=imperial
    City 90:tabory    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tabory,ru&units=imperial
    City 91:karibib    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=karibib,na&units=imperial
    City 92:lukovetskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lukovetskiy,ru&units=imperial
    City 93:luderitz    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=luderitz,na&units=imperial
    City 94:sucre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sucre,co&units=imperial
    City 95:kasama    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kasama,zm&units=imperial
    City 96:marck    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marck,fr&units=imperial
    City 97:pulaski    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=pulaski,us&units=imperial
    City 98:bucarasica    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bucarasica,co&units=imperial
    City 99:ariquemes    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ariquemes,br&units=imperial
    City 100:hendaye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hendaye,fr&units=imperial
    City 101:sembe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sembe,cg&units=imperial
    City 102:canaries    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=canaries,lc&units=imperial
    canaries was not found in weather API. Moving to next record.
    City 103:soligalich    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=soligalich,ru&units=imperial
    City 104:baringo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=baringo,ke&units=imperial
    City 105:marevo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marevo,ru&units=imperial
    City 106:san luis    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san luis,ar&units=imperial
    City 107:kaupanger    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kaupanger,no&units=imperial
    City 108:galashki    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=galashki,ru&units=imperial
    City 109:humaita    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=humaita,br&units=imperial
    humaita was not found in weather API. Moving to next record.
    City 110:adre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=adre,td&units=imperial
    City 111:puksoozero    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=puksoozero,ru&units=imperial
    City 112:porbandar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=porbandar,in&units=imperial
    City 113:ouro preto do oeste    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ouro preto do oeste,br&units=imperial
    City 114:zelenogorskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zelenogorskiy,ru&units=imperial
    City 115:bocicoiu mare    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bocicoiu mare,ro&units=imperial
    City 116:saint-jean-de-dieu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint-jean-de-dieu,ca&units=imperial
    saint-jean-de-dieu was not found in weather API. Moving to next record.
    City 117:corner brook    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=corner brook,ca&units=imperial
    City 118:vysoke    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vysoke,ua&units=imperial
    City 119:coracora    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=coracora,pe&units=imperial
    City 120:chernyy yar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chernyy yar,ru&units=imperial
    City 121:accra    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=accra,gh&units=imperial
    City 122:hamilton    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hamilton,bm&units=imperial
    City 123:metehara    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=metehara,et&units=imperial
    metehara was not found in weather API. Moving to next record.
    City 124:cravo norte    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cravo norte,co&units=imperial
    City 125:segovia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=segovia,es&units=imperial
    City 126:la serena    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=la serena,cl&units=imperial
    City 127:meyzieu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=meyzieu,fr&units=imperial
    City 128:cumra    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cumra,tr&units=imperial
    City 129:kapoeta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kapoeta,sd&units=imperial
    kapoeta was not found in weather API. Moving to next record.
    City 130:forio    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=forio,it&units=imperial
    City 131:governador valadares    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=governador valadares,br&units=imperial
    City 132:tukums    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tukums,lv&units=imperial
    City 133:yenisea    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yenisea,gr&units=imperial
    yenisea was not found in weather API. Moving to next record.
    City 134:msanga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=msanga,tz&units=imperial
    City 135:aparecida do taboado    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=aparecida do taboado,br&units=imperial
    City 136:plerin    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=plerin,fr&units=imperial
    City 137:tramandai    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tramandai,br&units=imperial
    City 138:hope mills    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hope mills,us&units=imperial
    City 139:palmares do sul    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=palmares do sul,br&units=imperial
    City 140:washington    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=washington,us&units=imperial
    City 141:traipu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=traipu,br&units=imperial
    City 142:bathurst    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bathurst,ca&units=imperial
    City 143:maralal    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=maralal,ke&units=imperial
    City 144:nikki    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nikki,bj&units=imperial
    City 145:kifri    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kifri,iq&units=imperial
    City 146:owando    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=owando,cg&units=imperial
    City 147:belmonte    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=belmonte,br&units=imperial
    City 148:taraz    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=taraz,kz&units=imperial
    City 149:bella union    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bella union,uy&units=imperial
    City 150:riga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=riga,lv&units=imperial
    City 151:willemstad    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=willemstad,an&units=imperial
    willemstad was not found in weather API. Moving to next record.
    City 152:santiago    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santiago,co&units=imperial
    City 153:bouafle    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bouafle,ci&units=imperial
    City 154:amapa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=amapa,br&units=imperial
    City 155:nimaparha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nimaparha,in&units=imperial
    City 156:luanda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=luanda,ao&units=imperial
    City 157:yakshur-bodya    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yakshur-bodya,ru&units=imperial
    yakshur-bodya was not found in weather API. Moving to next record.
    City 158:vagamo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vagamo,no&units=imperial
    City 159:arraial do cabo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=arraial do cabo,br&units=imperial
    City 160:burica    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=burica,pa&units=imperial
    burica was not found in weather API. Moving to next record.
    City 161:kollumerland    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kollumerland,nl&units=imperial
    kollumerland was not found in weather API. Moving to next record.
    City 162:gorele    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gorele,tr&units=imperial
    City 163:redwater    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=redwater,ca&units=imperial
    City 164:chingola    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chingola,zm&units=imperial
    City 165:potma    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=potma,ru&units=imperial
    potma was not found in weather API. Moving to next record.
    City 166:gwadar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gwadar,pk&units=imperial
    City 167:puerto cabello    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=puerto cabello,ve&units=imperial
    City 168:magaria    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=magaria,ne&units=imperial
    City 169:kalavrita    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kalavrita,gr&units=imperial
    kalavrita was not found in weather API. Moving to next record.
    City 170:gopalpur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gopalpur,in&units=imperial
    City 171:gulfport    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gulfport,us&units=imperial
    City 172:santa fe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santa fe,cu&units=imperial
    City 173:san lazaro    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san lazaro,py&units=imperial
    san lazaro was not found in weather API. Moving to next record.
    City 174:yarmouth    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yarmouth,ca&units=imperial
    City 175:bicester    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bicester,gb&units=imperial
    City 176:allonnes    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=allonnes,fr&units=imperial
    City 177:san andres    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san andres,co&units=imperial
    City 178:drabiv    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=drabiv,ua&units=imperial
    City 179:manavalakurichi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=manavalakurichi,in&units=imperial
    City 180:parambu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=parambu,br&units=imperial
    City 181:varkaus    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=varkaus,fi&units=imperial
    City 182:rosita    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rosita,ni&units=imperial
    City 183:santa lucia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santa lucia,pe&units=imperial
    City 184:mahebourg    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mahebourg,mu&units=imperial
    City 185:saint-pierre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint-pierre,re&units=imperial
    City 186:nizhnyaya tavda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nizhnyaya tavda,ru&units=imperial
    City 187:salym    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=salym,ru&units=imperial
    City 188:zlobin    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zlobin,by&units=imperial
    zlobin was not found in weather API. Moving to next record.
    City 189:kralendijk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kralendijk,an&units=imperial
    kralendijk was not found in weather API. Moving to next record.
    City 190:puerto castilla    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=puerto castilla,hn&units=imperial
    City 191:trincomalee    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=trincomalee,lk&units=imperial
    City 192:traverse city    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=traverse city,us&units=imperial
    City 193:elat    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=elat,il&units=imperial
    elat was not found in weather API. Moving to next record.
    City 194:havre-saint-pierre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=havre-saint-pierre,ca&units=imperial
    City 195:kaunas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kaunas,lt&units=imperial
    City 196:beckley    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=beckley,us&units=imperial
    City 197:opuwo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=opuwo,na&units=imperial
    City 198:velingara    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=velingara,sn&units=imperial
    City 199:saint andrews    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint andrews,ca&units=imperial
    City 200:itatskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=itatskiy,ru&units=imperial
    City 201:gremyachye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gremyachye,ru&units=imperial
    gremyachye was not found in weather API. Moving to next record.
    City 202:raduzhnyy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=raduzhnyy,ru&units=imperial
    City 203:maltahohe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=maltahohe,na&units=imperial
    City 204:vieira de leiria    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vieira de leiria,pt&units=imperial
    City 205:copacabana    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=copacabana,bo&units=imperial
    City 206:san juan del sur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san juan del sur,ni&units=imperial
    City 207:arkhangelsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=arkhangelsk,ru&units=imperial
    City 208:kamyshin    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kamyshin,ru&units=imperial
    City 209:skagastrond    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=skagastrond,is&units=imperial
    skagastrond was not found in weather API. Moving to next record.
    City 210:zilair    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zilair,ru&units=imperial
    City 211:kwekwe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kwekwe,zw&units=imperial
    City 212:young    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=young,uy&units=imperial
    City 213:wittlich    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=wittlich,de&units=imperial
    City 214:muscat    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=muscat,om&units=imperial
    City 215:vaihingen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vaihingen,de&units=imperial
    City 216:gagnoa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gagnoa,ci&units=imperial
    City 217:jatai    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jatai,br&units=imperial
    City 218:carora    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=carora,ve&units=imperial
    City 219:meleuz    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=meleuz,ru&units=imperial
    City 220:tarancon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tarancon,es&units=imperial
    City 221:chavakkad    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chavakkad,in&units=imperial
    City 222:ardesen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ardesen,tr&units=imperial
    City 223:nzerekore    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nzerekore,gn&units=imperial
    City 224:san giorgio del sannio    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san giorgio del sannio,it&units=imperial
    City 225:vryburg    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vryburg,za&units=imperial
    City 226:mitsamiouli    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mitsamiouli,km&units=imperial
    City 227:resistencia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=resistencia,ar&units=imperial
    City 228:hagere hiywet    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hagere hiywet,et&units=imperial
    City 229:mlowo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mlowo,tz&units=imperial
    City 230:bandundu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bandundu,cd&units=imperial
    City 231:stryn    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=stryn,no&units=imperial
    City 232:ahtopol    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ahtopol,bg&units=imperial
    City 233:sajanan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sajanan,tn&units=imperial
    City 234:atlantic city    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=atlantic city,us&units=imperial
    atlantic city was not found in weather API. Moving to next record.
    City 235:kreminna    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kreminna,ua&units=imperial
    City 236:humenne    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=humenne,sk&units=imperial
    City 237:sangin    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sangin,af&units=imperial
    City 238:jumla    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jumla,np&units=imperial
    City 239:ouesso    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ouesso,cg&units=imperial
    City 240:teseney    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=teseney,er&units=imperial
    City 241:maimon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=maimon,do&units=imperial
    maimon was not found in weather API. Moving to next record.
    City 242:apatou    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=apatou,gf&units=imperial
    City 243:fianarantsoa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=fianarantsoa,mg&units=imperial
    City 244:libourne    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=libourne,fr&units=imperial
    City 245:las palmas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=las palmas,es&units=imperial
    las palmas was not found in weather API. Moving to next record.
    City 246:east stroudsburg    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=east stroudsburg,us&units=imperial
    City 247:storsteinnes    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=storsteinnes,no&units=imperial
    City 248:puerto suarez    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=puerto suarez,bo&units=imperial
    City 249:alamor    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=alamor,ec&units=imperial
    City 250:moissala    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=moissala,td&units=imperial
    City 251:blejoi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=blejoi,ro&units=imperial
    City 252:tamale    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tamale,gh&units=imperial
    City 253:sosnogorsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sosnogorsk,ru&units=imperial
    City 254:uryupinsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=uryupinsk,ru&units=imperial
    City 255:itaunja    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=itaunja,in&units=imperial
    City 256:peru    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=peru,us&units=imperial
    City 257:upala    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=upala,cr&units=imperial
    City 258:shchuchye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=shchuchye,ru&units=imperial
    shchuchye was not found in weather API. Moving to next record.
    City 259:helsinki    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=helsinki,fi&units=imperial
    City 260:uyemskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=uyemskiy,ru&units=imperial
    City 261:bethalto    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bethalto,us&units=imperial
    City 262:cusuna    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cusuna,hn&units=imperial
    City 263:kotido    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kotido,ug&units=imperial
    City 264:olafsvik    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=olafsvik,is&units=imperial
    olafsvik was not found in weather API. Moving to next record.
    City 265:iqaluit    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=iqaluit,ca&units=imperial
    City 266:aliaga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=aliaga,tr&units=imperial
    City 267:srivardhan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=srivardhan,in&units=imperial
    City 268:mandali    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mandali,iq&units=imperial
    City 269:hanko    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hanko,fi&units=imperial
    City 270:canchungo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=canchungo,gw&units=imperial
    City 271:pimenta bueno    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=pimenta bueno,br&units=imperial
    City 272:ratisbon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ratisbon,de&units=imperial
    ratisbon was not found in weather API. Moving to next record.
    City 273:maksatikha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=maksatikha,ru&units=imperial
    City 274:petukhovo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=petukhovo,ru&units=imperial
    City 275:lefka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lefka,cy&units=imperial
    City 276:san cristobal    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san cristobal,ec&units=imperial
    City 277:suchitoto    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=suchitoto,sv&units=imperial
    City 278:zuwarah    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zuwarah,ly&units=imperial
    City 279:lyskovo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lyskovo,ru&units=imperial
    City 280:mul    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mul,in&units=imperial
    City 281:riberalta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=riberalta,bo&units=imperial
    City 282:merrill    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=merrill,us&units=imperial
    City 283:oskarshamn    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=oskarshamn,se&units=imperial
    City 284:trojes    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=trojes,hn&units=imperial
    City 285:wieliczka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=wieliczka,pl&units=imperial
    City 286:kimparana    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kimparana,ml&units=imperial
    City 287:piryion    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=piryion,gr&units=imperial
    piryion was not found in weather API. Moving to next record.
    City 288:mokrousovo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mokrousovo,ru&units=imperial
    City 289:huancavelica    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=huancavelica,pe&units=imperial
    City 290:dekar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dekar,bw&units=imperial
    City 291:damietta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=damietta,eg&units=imperial
    City 292:chapleau    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chapleau,ca&units=imperial
    City 293:jacobina    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jacobina,br&units=imperial
    City 294:inderborskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=inderborskiy,kz&units=imperial
    inderborskiy was not found in weather API. Moving to next record.
    City 295:kourou    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kourou,gf&units=imperial
    City 296:trofors    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=trofors,no&units=imperial
    City 297:moroto    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=moroto,ug&units=imperial
    City 298:barvinkove    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=barvinkove,ua&units=imperial
    City 299:windsor    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=windsor,ca&units=imperial
    City 300:nnewi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nnewi,ng&units=imperial
    City 301:maniwaki    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=maniwaki,ca&units=imperial
    City 302:paidha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=paidha,ug&units=imperial
    City 303:mariental    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mariental,na&units=imperial
    City 304:sayat    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sayat,tm&units=imperial
    City 305:sabzevar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sabzevar,ir&units=imperial
    City 306:calvia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=calvia,es&units=imperial
    City 307:malyye derbety    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=malyye derbety,ru&units=imperial
    City 308:bekhtery    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bekhtery,ua&units=imperial
    City 309:venice    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=venice,us&units=imperial
    City 310:killini    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=killini,gr&units=imperial
    killini was not found in weather API. Moving to next record.
    City 311:janfida    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=janfida,am&units=imperial
    City 312:skorodnoye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=skorodnoye,ru&units=imperial
    City 313:malakal    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=malakal,sd&units=imperial
    malakal was not found in weather API. Moving to next record.
    City 314:esil    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=esil,kz&units=imperial
    City 315:wamba    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=wamba,cd&units=imperial
    City 316:santo antonio do ica    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santo antonio do ica,br&units=imperial
    City 317:toamasina    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=toamasina,mg&units=imperial
    City 318:tonj    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tonj,sd&units=imperial
    tonj was not found in weather API. Moving to next record.
    City 319:vila velha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vila velha,br&units=imperial
    City 320:sergeyevka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sergeyevka,kz&units=imperial
    City 321:kankon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kankon,in&units=imperial
    City 322:oksfjord    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=oksfjord,no&units=imperial
    City 323:aleksandrov gay    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=aleksandrov gay,ru&units=imperial
    City 324:cuenca    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cuenca,ec&units=imperial
    City 325:abonnema    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=abonnema,ng&units=imperial
    City 326:paros    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=paros,gr&units=imperial
    City 327:chlum u trebone    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chlum u trebone,cz&units=imperial
    City 328:michigan city    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=michigan city,us&units=imperial
    City 329:archidona    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=archidona,ec&units=imperial
    City 330:ornskoldsvik    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ornskoldsvik,se&units=imperial
    City 331:le port    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=le port,re&units=imperial
    City 332:mora    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mora,cm&units=imperial
    City 333:barinas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=barinas,ve&units=imperial
    City 334:southaven    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=southaven,us&units=imperial
    City 335:gornoye loo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gornoye loo,ru&units=imperial
    City 336:rzhyshchiv    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rzhyshchiv,ua&units=imperial
    City 337:codroipo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=codroipo,it&units=imperial
    City 338:mouila    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=mouila,ga&units=imperial
    City 339:sultanpur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sultanpur,in&units=imperial
    City 340:kukmor    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kukmor,ru&units=imperial
    City 341:miandoab    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=miandoab,ir&units=imperial
    City 342:dabat    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dabat,et&units=imperial
    City 343:yambio    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yambio,sd&units=imperial
    yambio was not found in weather API. Moving to next record.
    City 344:artigas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=artigas,uy&units=imperial
    City 345:ragama    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ragama,lk&units=imperial
    City 346:oliva    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=oliva,es&units=imperial
    City 347:cozumel    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=cozumel,mx&units=imperial
    cozumel was not found in weather API. Moving to next record.
    City 348:awbari    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=awbari,ly&units=imperial
    City 349:saurimo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saurimo,ao&units=imperial
    City 350:san luis    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=san luis,co&units=imperial
    City 351:busayra    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=busayra,jo&units=imperial
    City 352:senneterre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=senneterre,ca&units=imperial
    City 353:novoleushkovskaya    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=novoleushkovskaya,ru&units=imperial
    City 354:kavos    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kavos,gr&units=imperial
    City 355:purpe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=purpe,ru&units=imperial
    City 356:calvinia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=calvinia,za&units=imperial
    City 357:punalur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=punalur,in&units=imperial
    City 358:machali    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=machali,cl&units=imperial
    City 359:kuusamo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kuusamo,fi&units=imperial
    City 360:dharur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dharur,in&units=imperial
    City 361:salamanca    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=salamanca,es&units=imperial
    City 362:pucallpa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=pucallpa,pe&units=imperial
    City 363:terny    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=terny,ua&units=imperial
    City 364:nuevitas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nuevitas,cu&units=imperial
    City 365:port antonio    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=port antonio,jm&units=imperial
    City 366:jijiga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jijiga,et&units=imperial
    City 367:tuggurt    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tuggurt,dz&units=imperial
    tuggurt was not found in weather API. Moving to next record.
    City 368:fomboni    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=fomboni,km&units=imperial
    City 369:komsomolskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=komsomolskiy,ru&units=imperial
    City 370:dom pedrito    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dom pedrito,br&units=imperial
    City 371:linares    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=linares,cl&units=imperial
    City 372:saint-marc    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=saint-marc,ht&units=imperial
    City 373:nuzvid    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nuzvid,in&units=imperial
    City 374:ifo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ifo,ng&units=imperial
    City 375:barkhan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=barkhan,pk&units=imperial
    City 376:ovre ardal    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ovre ardal,no&units=imperial
    City 377:manicore    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=manicore,br&units=imperial
    City 378:witrivier    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=witrivier,za&units=imperial
    witrivier was not found in weather API. Moving to next record.
    City 379:yacuiba    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yacuiba,bo&units=imperial
    City 380:sjovegan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sjovegan,no&units=imperial
    City 381:safaga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=safaga,eg&units=imperial
    safaga was not found in weather API. Moving to next record.
    City 382:gainesville    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gainesville,us&units=imperial
    City 383:abidjan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=abidjan,ci&units=imperial
    City 384:boyuibe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=boyuibe,bo&units=imperial
    City 385:staropyshminsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=staropyshminsk,ru&units=imperial
    City 386:indija    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=indija,rs&units=imperial
    indija was not found in weather API. Moving to next record.
    City 387:balykshi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=balykshi,kz&units=imperial
    balykshi was not found in weather API. Moving to next record.
    City 388:lowicz    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lowicz,pl&units=imperial
    City 389:henties bay    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=henties bay,na&units=imperial
    City 390:ravar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ravar,ir&units=imperial
    City 391:sinop    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sinop,tr&units=imperial
    City 392:malanje    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=malanje,ao&units=imperial
    City 393:toritama    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=toritama,br&units=imperial
    City 394:dhankuta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dhankuta,np&units=imperial
    City 395:horta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=horta,pt&units=imperial
    City 396:ayna    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ayna,pe&units=imperial
    City 397:bom jardim    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bom jardim,br&units=imperial
    City 398:el balyana    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=el balyana,eg&units=imperial
    el balyana was not found in weather API. Moving to next record.
    City 399:sheoganj    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sheoganj,in&units=imperial
    City 400:barda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=barda,ru&units=imperial
    City 401:lamu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lamu,ke&units=imperial
    City 402:kirovsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kirovsk,ru&units=imperial
    City 403:rahon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rahon,in&units=imperial
    City 404:voznesenye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=voznesenye,ru&units=imperial
    City 405:zasechnoye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zasechnoye,ru&units=imperial
    City 406:loutros    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=loutros,gr&units=imperial
    City 407:zanesville    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=zanesville,us&units=imperial
    City 408:beloha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=beloha,mg&units=imperial
    City 409:el cobre    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=el cobre,cu&units=imperial
    City 410:potgietersrus    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=potgietersrus,za&units=imperial
    potgietersrus was not found in weather API. Moving to next record.
    City 411:kranea elassonos    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kranea elassonos,gr&units=imperial
    City 412:nibbar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nibbar,tn&units=imperial
    City 413:warren    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=warren,us&units=imperial
    City 414:imisli    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=imisli,az&units=imperial
    imisli was not found in weather API. Moving to next record.
    City 415:batken    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=batken,kg&units=imperial
    City 416:ciudad real    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ciudad real,es&units=imperial
    City 417:bethanien    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bethanien,na&units=imperial
    City 418:akkermanovka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=akkermanovka,ru&units=imperial
    akkermanovka was not found in weather API. Moving to next record.
    City 419:naron    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=naron,es&units=imperial
    City 420:kawardha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kawardha,in&units=imperial
    City 421:iroquois falls    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=iroquois falls,ca&units=imperial
    City 422:santa helena de goias    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santa helena de goias,br&units=imperial
    City 423:malappuram    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=malappuram,in&units=imperial
    City 424:vazhiny    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vazhiny,ru&units=imperial
    City 425:kuznechnoye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kuznechnoye,ru&units=imperial
    City 426:llaillay    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=llaillay,cl&units=imperial
    City 427:tawkar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tawkar,sd&units=imperial
    tawkar was not found in weather API. Moving to next record.
    City 428:potosi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=potosi,bo&units=imperial
    City 429:dubai    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dubai,ae&units=imperial
    City 430:yarkovo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yarkovo,ru&units=imperial
    City 431:bachaquero    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bachaquero,ve&units=imperial
    City 432:gweta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gweta,bw&units=imperial
    City 433:porto nacional    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=porto nacional,br&units=imperial
    City 434:marsh harbour    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marsh harbour,bs&units=imperial
    City 435:olyka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=olyka,ua&units=imperial
    City 436:batsfjord    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=batsfjord,no&units=imperial
    City 437:jega    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jega,ng&units=imperial
    City 438:ji-parana    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ji-parana,br&units=imperial
    ji-parana was not found in weather API. Moving to next record.
    City 439:dvinskoy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dvinskoy,ru&units=imperial
    City 440:hargeysa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hargeysa,so&units=imperial
    City 441:serenje    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=serenje,zm&units=imperial
    City 442:vodnyy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vodnyy,ru&units=imperial
    City 443:youghal    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=youghal,ie&units=imperial
    City 444:koraput    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=koraput,in&units=imperial
    City 445:haverhill    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=haverhill,us&units=imperial
    City 446:aswan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=aswan,eg&units=imperial
    City 447:khed brahma    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=khed brahma,in&units=imperial
    City 448:ribas do rio pardo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ribas do rio pardo,br&units=imperial
    City 449:touros    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=touros,br&units=imperial
    City 450:balezino    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=balezino,ru&units=imperial
    City 451:brusyanskiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=brusyanskiy,ru&units=imperial
    City 452:kobojango    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kobojango,bw&units=imperial
    kobojango was not found in weather API. Moving to next record.
    City 453:porto de moz    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=porto de moz,br&units=imperial
    City 454:kindu    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kindu,cd&units=imperial
    City 455:chor    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chor,pk&units=imperial
    City 456:dembi dolo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dembi dolo,et&units=imperial
    City 457:akhmeta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=akhmeta,ge&units=imperial
    City 458:kouroussa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kouroussa,gn&units=imperial
    City 459:staryy krym    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=staryy krym,ua&units=imperial
    City 460:upata    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=upata,ve&units=imperial
    City 461:kilimatinde    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kilimatinde,tz&units=imperial
    City 462:orsha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=orsha,by&units=imperial
    City 463:tumaco    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tumaco,co&units=imperial
    City 464:santa marta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=santa marta,co&units=imperial
    City 465:nyagan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=nyagan,ru&units=imperial
    City 466:fuerte olimpo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=fuerte olimpo,py&units=imperial
    City 467:hazorasp    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hazorasp,uz&units=imperial
    City 468:ostrogozhsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ostrogozhsk,ru&units=imperial
    City 469:kasongo-lunda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kasongo-lunda,cd&units=imperial
    City 470:ashqelon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ashqelon,il&units=imperial
    City 471:atocha    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=atocha,bo&units=imperial
    City 472:rio cuarto    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rio cuarto,ar&units=imperial
    City 473:keti bandar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=keti bandar,pk&units=imperial
    City 474:funadhoo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=funadhoo,mv&units=imperial
    City 475:guider    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=guider,cm&units=imperial
    City 476:macau    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=macau,br&units=imperial
    City 477:novoorsk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=novoorsk,ru&units=imperial
    City 478:sao joao da ponte    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sao joao da ponte,br&units=imperial
    City 479:roches noires    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=roches noires,mu&units=imperial
    roches noires was not found in weather API. Moving to next record.
    City 480:muborak    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=muborak,uz&units=imperial
    City 481:vytegra    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vytegra,ru&units=imperial
    City 482:tessalit    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tessalit,ml&units=imperial
    City 483:jaen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=jaen,pe&units=imperial
    City 484:hattiesburg    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hattiesburg,us&units=imperial
    City 485:smiths falls    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=smiths falls,ca&units=imperial
    City 486:ayame    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ayame,ci&units=imperial
    City 487:verkhoturye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=verkhoturye,ru&units=imperial
    City 488:rurrenabaque    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=rurrenabaque,bo&units=imperial
    City 489:bandar-e lengeh    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bandar-e lengeh,ir&units=imperial
    City 490:bocas del toro    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bocas del toro,pa&units=imperial
    City 491:charleston    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=charleston,us&units=imperial
    City 492:adeje    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=adeje,es&units=imperial
    City 493:acarau    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=acarau,br&units=imperial
    acarau was not found in weather API. Moving to next record.
    City 494:vilhena    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vilhena,br&units=imperial
    City 495:wawa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=wawa,ca&units=imperial
    City 496:tingrela    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tingrela,ci&units=imperial
    tingrela was not found in weather API. Moving to next record.
    City 497:marsala    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marsala,it&units=imperial
    City 498:gistrup    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=gistrup,dk&units=imperial
    City 499:uniao da victoria    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=uniao da victoria,br&units=imperial
    uniao da victoria was not found in weather API. Moving to next record.
    City 500:basoko    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=basoko,cd&units=imperial
    City 501:dujuma    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dujuma,so&units=imperial
    dujuma was not found in weather API. Moving to next record.
    City 502:port harcourt    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=port harcourt,ng&units=imperial
    City 503:lahijan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=lahijan,ir&units=imperial
    City 504:waynesboro    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=waynesboro,us&units=imperial
    City 505:hakkari    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hakkari,tr&units=imperial
    City 506:halmstad    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=halmstad,se&units=imperial
    City 507:boffa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=boffa,gn&units=imperial
    City 508:uppsala    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=uppsala,se&units=imperial
    City 509:kissidougou    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kissidougou,gn&units=imperial
    City 510:barcelos    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=barcelos,br&units=imperial
    City 511:darab    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=darab,ir&units=imperial
    City 512:verkhnya syrovatka    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=verkhnya syrovatka,ua&units=imperial
    verkhnya syrovatka was not found in weather API. Moving to next record.
    City 513:salalah    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=salalah,om&units=imperial
    City 514:tuzla    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tuzla,ro&units=imperial
    City 515:esmeraldas    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=esmeraldas,ec&units=imperial
    City 516:grand baie    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=grand baie,mu&units=imperial
    City 517:neustadt    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=neustadt,de&units=imperial
    City 518:bar-le-duc    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bar-le-duc,fr&units=imperial
    City 519:dieppe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=dieppe,fr&units=imperial
    City 520:patacamaya    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=patacamaya,bo&units=imperial
    City 521:urdzhar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=urdzhar,kz&units=imperial
    urdzhar was not found in weather API. Moving to next record.
    City 522:suarez    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=suarez,co&units=imperial
    City 523:meybod    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=meybod,ir&units=imperial
    City 524:thatta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=thatta,pk&units=imperial
    thatta was not found in weather API. Moving to next record.
    City 525:afrikanda    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=afrikanda,ru&units=imperial
    City 526:monster    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=monster,nl&units=imperial
    City 527:tselinnoye    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tselinnoye,ru&units=imperial
    tselinnoye was not found in weather API. Moving to next record.
    City 528:kolyvan    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=kolyvan,ru&units=imperial
    City 529:ampanihy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ampanihy,mg&units=imperial
    City 530:madarounfa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=madarounfa,ne&units=imperial
    City 531:treuchtlingen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=treuchtlingen,de&units=imperial
    City 532:pitkyaranta    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=pitkyaranta,ru&units=imperial
    City 533:utinga    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=utinga,br&units=imperial
    City 534:hornepayne    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=hornepayne,ca&units=imperial
    City 535:resen    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=resen,mk&units=imperial
    City 536:taua    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=taua,br&units=imperial
    City 537:glubokiy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=glubokiy,ru&units=imperial
    City 538:bhasawar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bhasawar,in&units=imperial
    City 539:sontra    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sontra,de&units=imperial
    City 540:murmansk    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=murmansk,ru&units=imperial
    City 541:muisne    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=muisne,ec&units=imperial
    City 542:los algarrobos    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=los algarrobos,pa&units=imperial
    City 543:bhainsa    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=bhainsa,in&units=imperial
    City 544:glubokoe    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=glubokoe,kz&units=imperial
    glubokoe was not found in weather API. Moving to next record.
    City 545:melo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=melo,uy&units=imperial
    City 546:yalchiki    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yalchiki,ru&units=imperial
    yalchiki was not found in weather API. Moving to next record.
    City 547:alenquer    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=alenquer,br&units=imperial
    City 548:porto novo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=porto novo,cv&units=imperial
    City 549:yeroham    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=yeroham,il&units=imperial
    City 550:vila franca do campo    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vila franca do campo,pt&units=imperial
    City 551:tuljapur    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=tuljapur,in&units=imperial
    City 552:salgar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=salgar,co&units=imperial
    City 553:batavia    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=batavia,us&units=imperial
    City 554:sertanopolis    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sertanopolis,br&units=imperial
    City 555:sedkyrkeshch    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=sedkyrkeshch,ru&units=imperial
    City 556:puerto quijarro    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=puerto quijarro,bo&units=imperial
    City 557:middle island    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=middle island,kn&units=imperial
    middle island was not found in weather API. Moving to next record.
    City 558:epernay    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=epernay,fr&units=imperial
    City 559:vesoul    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=vesoul,fr&units=imperial
    City 560:chishtian mandi    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=chishtian mandi,pk&units=imperial
    City 561:port perry    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=port perry,ca&units=imperial
    City 562:ihosy    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=ihosy,mg&units=imperial
    City 563:marathon    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=marathon,ca&units=imperial
    City 564:suar    is being processed: http://api.openweathermap.org/data/2.5/weather?appid=25bc90a1196e6f153eece0bc0b0fc9eb&q=suar,in&units=imperial
    


```python
plt.style.use('ggplot')
%matplotlib inline
weather_df.to_csv('weather_df.csv')
```


```python
# Temperature (F) vs. Latitude
sns.lmplot(x='Latitude', y='Temperature (F)', data=weather_df,fit_reg=False)
plt.title('Temperature (F) vs. Latitude ' + date)
plt.xlim(-80,100)
plt.savefig('Temperature (F) vs. Latitude.png')
```


![png](output_6_0.png)



```python
# Humidity (%) vs. Latitude
sns.lmplot(x='Latitude', y='Humidity (%)', data=weather_df,fit_reg=False)
plt.title('Humidity (%) vs. Latitude ' + date)
plt.ylim(0, 120)
plt.xlim(-80,100)
plt.savefig('Humidity (%) vs. Latitude.png')
```


![png](output_7_0.png)



```python
# Cloudiness (%) vs. Latitude
sns.lmplot(x='Latitude', y='Cloudiness (%)', data=weather_df, fit_reg=False)
plt.title('Cloudiness (%) vs. Latitude ' + date)
plt.ylim(0, 120)
plt.xlim(-80,100)
plt.savefig('Cloudiness (%) vs. Latitude.png')
```


![png](output_8_0.png)



```python
# Wind Speed (mph) vs. Latitude
sns.lmplot(x='Latitude', y='Wind Speed (mph)', data=weather_df, fit_reg=False)
plt.title('Wind Speed (mph) vs. Latitude ' + date)
plt.ylim(-5, 40)
plt.savefig('Wind Speed (mph) vs Latitude.png')
```


![png](output_9_0.png)

