import pandas as pd
import numpy as np

#
# Merges all relevant data, deletes the rest, stores the results in SPD_Crime_Data__2008-Present.csv
#

# The read csv file
read = 'data/SPD_Crime_Data__2008-Present.csv'
# The write csv file
write_p1 = 'data/SPD_Crime_Data__2008-Present_cleaned_p1.csv'
write_p2 = 'data/SPD_Crime_Data__2008-Present_cleaned_p2.csv'
write_tenth = 'data/SPD_Crime_Data__2008-Present_tenth_cleaned.csv'
# The csv file with as a data frame
df = pd.read_csv(read)
# Suppress numpy float sci form
np.set_printoptions(suppress=True)

def main():
    df_dropped = df.drop(['Precinct', 'Sector', 'Beat', "Group A B", 'Offense Code', 'Report Number'], axis=1).dropna()
    df_dropped_tenth = df_dropped.sample(frac=0.1)

    # resulting merged & cleaned data frame
    print_data_stats(df_dropped, df_dropped_tenth)

    # Output merged & cleaned dataframe to csv file
    df_dropped[:df_dropped.shape[0]//2].to_csv(write_p1, float_format='%.3f', index=False)
    df_dropped[df_dropped.shape[0]//2:].to_csv(write_p2, float_format='%.3f', index=False)
    df_dropped_tenth.to_csv(write_tenth, float_format='%.3f', index=False)
    # df['Year'] = [x[6:11] for x in df['Offense Start DateTime'].to_numpy()]
    # df.to_csv(write_tenth, float_format='%.3f', index=False)
    # print(df)

def print_data_stats(df, df_min):
    print(f'Data sample first 5 (full): {df[:5]} \n Data columns (full):\
          {df.columns} \n Data shape (full): {df.to_numpy().shape} \n\n')
    print(f'Data sample first 5 (tenth): {df_min[:5]} \n Data columns (tenth):\
           {df_min.columns} \n Data shape (tenth): {df_min.to_numpy().shape}')

if __name__ == "__main__":
    main()
