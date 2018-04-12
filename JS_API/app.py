from flask import Flask, jsonify, render_template
import csv
import os
import pandas as pd
import json
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/names')
def names():
    file_name = os.path.join("DataSets", "Belly_Button_Biodiversity_Samples.csv")
    metadata_df = pd.read_csv(file_name)
    sample_names = list(metadata_df.columns.values)
    del sample_names[0]
    return jsonify(sample_names)

@app.route('/otu')
def otu():
    file_name = os.path.join("DataSets", "Belly_Button_Biodiversity_otu_id.csv")
    metadata_df = pd.read_csv(file_name)
    otu_desc = list(metadata_df.iloc[:,1])
    return jsonify(otu_desc)

@app.route('/metadata/<sample>')
def metadata(sample):
    # list1 = []
    sample_input = sample[3:]
    file_name = os.path.join('DataSets', 'Belly_Button_Biodiversity_Metadata.csv')
    metadata_df = pd.read_csv(file_name)
    metadata_df = metadata_df.fillna(0)
    metadata_df1 = metadata_df.set_index('SAMPLEID')
    sample_data = metadata_df1.loc[int(sample_input)]
    sample_data1 = sample_data.to_dict()
    return jsonify(sample_data1) 


@app.route('/wfreq/<sample>')
def washing(sample):
    sample_input = sample[3:]
    file_name = os.path.join('DataSets', 'Belly_Button_Biodiversity_Metadata.csv')
    metadata_df = pd.read_csv(file_name)
    metadata_df = metadata_df.fillna(0)
    metadata_df = metadata_df.iloc[:,[0,5]]
    metadata_df1 = metadata_df.set_index('SAMPLEID')
    sample_data = metadata_df1.loc[int(sample_input)]
    wash_freq = sample_data[0]
    return str(wash_freq)

@app.route('/samples/<sample>')
def sample(sample):
    file_name = os.path.join('DataSets', 'belly_button_biodiversity_samples.csv')
    metadata_df = pd.read_csv(file_name)
    metadata_df = metadata_df.fillna(0)
    sample_data = metadata_df.loc[:, str(sample.upper())]
    sample_data = sample_data.reset_index()
    sample_data.columns = ['OTU_ID','SAMPLE_VALUES']
    sample_data = sample_data.sort_values(['SAMPLE_VALUES', 'OTU_ID'], ascending=False)
    sample_data['OTU_ID'] = sample_data.OTU_ID.astype(int)
    sample_data['SAMPLE_VALUES'] = sample_data.SAMPLE_VALUES.astype(int)
    otus = sample_data.iloc[:,0]
    otus = otus.tolist()
    new_otus = []
    for x in range(0, len(otus)):
        record = otus[x] + 1
        new_otus.append(record)
    values = sample_data.iloc[:,1]
    values = values.tolist()
    things = [new_otus, values]
    return  jsonify(things)

    
if __name__ == "__main__":
    app.run(debug=True)