import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';
import CustomButton from '../../components/button/Button';
import brokenRobot from '../../assets/images/broken_robot.svg';
import styles from '../../assets/js/styles/views/not_found/notFoundStyles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function NotFoundPage() {
  const classes = useStyles();

  const i18n = useSelector(state => state.language.i18n);

  return (
    <Box className={classes.root}>
      <Container className={classes.mainContainerStyle}>
        <Box className={classes.errorBoxStyle}>
          <Typography variant="h3" component={'h1'}>
            {i18n.t("error.ERROR")} <span className={classes.boldErrorText}>404</span>
          </Typography>
          <Typography variant="h3" component={'p'}>
            {i18n.t('error.SomethingWent')} <span className={classes.wrongText}> {i18n.t('error.WRONG')}!</span>
          </Typography>

          <Link to={'/'} className={classes.textDecorationNone}>
            <CustomButton
              variant="outlined"
              size="large"
              primaryButtonStyle
              customButtonStyle
              fullWidth
            >
               {i18n.t('error.goBackToHomePage')}
            </CustomButton>
          </Link>
        </Box>
        <img className={classes.errorImg} src={brokenRobot} alt="error 404" />
      </Container>
    </Box>
  );
}

export default NotFoundPage;
