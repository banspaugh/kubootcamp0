
# coding: utf-8

# In[1]:


import time
from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd
import requests
from selenium import webdriver
from sys import platform


# In[2]:

def scrape():
    def init_browser():
        if platform == "darwin":
            executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
        else:
            executable_path = {'executable_path': 'chromedriver.exe'}
        return Browser("chrome", **executable_path, headless=False)


    # In[3]:


    url = 'https://mars.nasa.gov/news/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')


    # In[4]:


    title = soup.find('div', class_='content_title')
    title1 = title.get_text()
    title2 = title1.strip('\n')
    desc = soup.find('div', class_='rollover_description_inner')
    desc1 = desc.get_text()
    desc2 = desc1.strip('\n')


    # In[5]:


    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')


    # In[6]:


    picture = soup.find(class_='carousel_item')['style']
    picture1 = picture.lstrip('''background-image: url(''').rstrip(');')
    featured_image_url = 'https://www.jpl.nasa.gov' + picture1.strip("'")


    # In[7]:


    url = 'https://twitter.com/marswxreport?lang=en'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')


    # In[8]:


    result = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text")
    mars_weather = result.get_text()


    # In[9]:


    url = 'https://space-facts.com/mars/'
    tables = pd.read_html(url)
    table_string = tables[0].to_html()


    # In[10]:


    url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    hemisphere_image_urls = []
    links = ['https://astropedia.astrogeology.usgs.gov/download/Mars/Viking/cerberus_enhanced.tif/full.jpg',
            'https://astropedia.astrogeology.usgs.gov/download/Mars/Viking/schiaparelli_enhanced.tif/full.jpg',
            'https://astropedia.astrogeology.usgs.gov/download/Mars/Viking/syrtis_major_enhanced.tif/full.jpg',
            'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/valles_marineris_enhanced.tif/full.jpg']
    for x in range(0, len(soup.findAll(class_="item"))):
        entry = {soup.findAll(class_="item")[x].find('a').find('div').get_text(): links[x]}
        hemisphere_image_urls.append(entry)


    # In[11]:


    mars_dict = {
    'news_title' : title2,
    'news_summary' : desc2, 
    'featured_image_url' : featured_image_url,
    'mars_weather' : mars_weather,
    'table_string' : table_string,
    'hemisphere_image_urls' : hemisphere_image_urls}

    return mars_dict


