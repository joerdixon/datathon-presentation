import pandas as pd
import numpy as np

#
# Merges all relevant data, deletes the rest, stores the results in SPD_Crime_Data__2008-Present.csv
#

# The read csv file
read = 'data/SPD_Crime_Data__2008-Present.csv'
# The write csv file
write = 'data/SPD_Crime_Data__2008-Present_100k.csv'
# The csv file with as a data frame
df = pd.read_csv(read)
# Suppress numpy float sci form
np.set_printoptions(suppress=True)

def main():
    dest_map = {}

    # resulting merged & cleaned data frame
    print(df.sample(frac=0.1))

    dest_df = pd.DataFrame.from_dict(dest_map)
    # Output merged & cleaned dataframe to csv file
    df.sample(frac=0.1).to_csv(write, float_format='%.3f', index=False)

if __name__ == "__main__":
    main()
