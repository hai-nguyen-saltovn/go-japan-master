import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "../../common/Grid/GridContainer";
import GridItem from "../../common/Grid/GridItem";
import Button from "../../common/FormControls/CustomButtons/Button";
import Card from "../../common/Card/Card";
import CardBody from "../../common/Card/CardBody";

import homePageStyle from "../../../styles/views/homePageStyle";

import banner from "../../../img/banner.jpg";
import tim from "../../../img/reactlogo.png";
import CustomInput from "../../common/FormControls/CustomInput/CustomInput";
import { InputAdornment, FormLabel, CardMedia, Typography, CardContent, CardActionArea } from "@material-ui/core";
import Location from "@material-ui/icons/LocationOn";
import Keyboard from "@material-ui/icons/Keyboard";
import Business from '@material-ui/icons/Business';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactHtmlParser from 'react-html-parser'; 


class HomePage extends React.Component<{ classes: any }, {}> {


  public handleChangeDetailJob = (event: any) => {

  }

  render() {
    const { classes } = this.props;

    var job = <><GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={2} sm={2} md={2}>
            <img src={tim} alt="logo Company" className={classes.logo} />
          </GridItem>
          <GridItem xs={10} sm={8} md={8}>
            <div>
              <Typography component="h5" variant="h5">
                Job Title
                           </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Category
                          </Typography>

              <div>
                <Business className={classes.iconGray} />
                <FormLabel className={classes.iconLabel}> Company Name </FormLabel>
                <Location className={classes.iconGray} />
                <FormLabel className={classes.iconLabel}> Tokyo, Japan </FormLabel>
                <AttachMoney className={classes.iconGray} />
                <FormLabel className={classes.iconLabel}> 2000$ </FormLabel>

              </div>
            </div>
          </GridItem>
          <GridItem xs={2} sm={2} md={2}>
            <div style={{ textAlign: "center" }}>
              <Button
                disabled
                color="primary"
                size="sm"
                className={classes.marginRight}
              >
                New
                              </Button>
              <Typography variant="body1" color="textSecondary">
                Posted 1 day ago
                            </Typography>
            </div>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer></>;
    var html_string = "<h5>Company Description</h5> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p><h5>Job Overview</h5><p>Our development team focuses on unit testing, TDD, CI, design patterns and refactoring. Internal and external training is encouraged through mentoring, guided self-learning, conferences, user groups and training courses. We maintain and improve existing codebases, and create new systems, exposing developers to constant variety.</p>";

    return (
      <div className={classes.container}>
        <div
          className={classes.banner}
          style={{ backgroundImage: "url(" + banner + ")" }}>
          <GridContainer alignItems="center" justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Sự nghiệp trong tầm tay</h2>
              <h5 className={classes.description}>
                Hãy đến Nhật bản xây dựng tương lai vững chắc,
              </h5>
              <h5 className={classes.description}>
                Chúng tôi Go Japan sẽ đồng hành và hổ trợ bạn
              </h5>
            </GridItem>
            <GridItem xs={12} sm={10} md={10}>
              <form>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={5} md={5}>
                        <CustomInput
                          labelText="Keywords.."
                          id="keywork"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Keyboard className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <CustomInput
                          labelText="Location.."
                          id="Location"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Location className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Button round variant="contained" color="rose" className={classes.button}>
                          Search
                        </Button>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                        <FormLabel style={{ verticalAlign: "bottom" }}>Or</FormLabel>
                        <Button round variant="contained" color="warning" className={classes.button}>
                          Send CV Now
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </form>
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.content}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h4 className={classes.cardCategory}>Recent Jobs</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <h4 className={classes.cardCategory}>Featured Jobs</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <div>
                <ExpansionPanel onChange={this.handleChangeDetailJob.bind(this)} className={classes.margin15px}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    {job}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      {ReactHtmlParser (html_string)}
                   
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel onChange={this.handleChangeDetailJob.bind(this)} className={classes.margin15px}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    {job}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                      maximus est, id dignissim quam.
                  </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card >
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                  <div className={classes.icon}>
                    <Home className={classes.iconRose} />
                  </div>
                  <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                    $29
                </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is between 2 and 10 Persons.
                </p>
                  <Button round color="rose">
                    Choose plan
                </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}


export default withStyles(homePageStyle)(HomePage);
