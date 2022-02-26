import {Platform, TextStyle} from 'react-native';

interface Typography {
  primary: TextStyle;
  primaryBold: TextStyle;
  primarySemiBold: TextStyle;
}

const typography: Typography = {
  primary:
    Platform.OS === 'ios'
      ? {
          fontFamily: 'Open Sans',
          fontWeight: 'normal',
        }
      : {
          fontFamily: 'OpenSans',
        },
  primaryBold:
    Platform.OS === 'ios'
      ? {
          fontFamily: 'Open Sans',
          fontWeight: 'bold',
        }
      : {
          fontFamily: 'OpenSans-Bold',
        },
  primarySemiBold:
    Platform.OS === 'ios'
      ? {
          fontFamily: 'Open Sans',
          fontWeight: '600',
        }
      : {
          fontFamily: 'OpenSans-SemiBold',
        },
};

export default typography;
