const components = {
  MuiButton: {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
      fontSize: "5rem",
      root: {
        textTransform: 'capitalize',
        borderRadius: '12px'
      },
      containedSizeLarge: {
        fontSize: '16px',
        fontWeight: '700',
        height: '56px',
        borderRadius: '12px'
      },
      containedSizeMedium: {
        fontSize: '15px',
        fontWeight: '600',
        height: '34px',
        borderRadius: '12px',
        // backgroundColor: theme.palette.primary.main
      },
      containedSizeSmall: {
        fontSize: '14px',
        fontWeight: '600',
        height: '32px',
        borderRadius: '6px'
      },
      textSizeSmall: {
        fontSize: '14px',
        fontWeight: '400',
        height: '32px',
        borderRadius: '12px'
      },
      outlinedSizeMedium: {
        fontSize: '15px',
        fontWeight: '600',
        height: '34px',
        borderRadius: '12px',
        // backgroundColor: theme.palette.primary.main
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: '56px'
      },
      notchedOutline: {
        borderColor: '#E2E8F0'
      },
      sizeSmall: {
        height: 42
      }
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
      }
    }
  }
};

export default components;
