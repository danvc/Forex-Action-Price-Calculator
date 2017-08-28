import React, { Component } from 'react';
import { Button, Form, Input, Grid, Divider, Table} from 'semantic-ui-react';
import InputFields from './InputFields';
import ResultFields from './ResultFields';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            close: 1.1866,
            high: 1.2000,
            low: 1.1854,
            lPV       : 0,
            lHBO      : 0,
            lHBO1     : 0,
            lTARGET2  : 0,
            lBO2      : 0,
            lTARGET1  : 0,
            lMS       : 0,
            lLBO1     : 0,
            lLBO      : 0,
            lTARGET1B : 0,
            lLBO2     : 0,
            lTARGET2B : 0,
            rTARGET2  : 0,
            rBO2      : 0,
            rHBO1     : 0,
            rTARGET1  : 0,
            rPV       : 0,
            rHBO      : 0,
            rMS       : 0,
            rLBO1     : 0,
            rLBO      : 0,
            rTARGET1b : 0,
            rLBO2     : 0,
            rTARGET2b : 0,                       
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.id || e.target.name] : e.target.value
        });
        
        this.calculate();
    }
    calculate() {
        let close = this.state.close,
        high = this.state.high,
        low = this.state.low;

            // left side - bullish side
        let lTARGET2 = (close * 0.3333)+(high*0.6667)+0.0127; // ok
        let lBO2     = (close*0.6667)+(high*0.3333)+0.0095; // ok
        
        let lHBO1    = (close<high) ? (0.3333*close)+(0.6667*high)-0.00115 : (0.3333*close)+(0.6667*high)+0.0042; // ok
        let lTARGET1 = (close<high) ? (lHBO1+0.0053) : lHBO1; //ok
        
        let lPV      = (close<high) ? (close*0.6667)+(high*0.3333)-0.00105: (close*0.6667)+(high*0.3333)+0.001;
        let lHBO     = lPV+0.0039;
        

        let lMS       = (close<high) ? (close*0.2500)+(high*0.7500)+0.0015 : (close*0.2500)+(high*0.7500)+0.00155;
        let lLBO1     = (close<high) ? (lHBO1-0.00315) : (0.2500*close)+(0.7500*high);
        let lLBO      = lPV-0.0039;
        let lTARGET1B = (close<high) ? (lLBO1-0.0011) : (0.3333*close)+(0.6667*high)-0.0053;
        let lLBO2     = (close<high) ? (close*0.3333)+(high*0.6667)-0.0085 : (close*0.3333)+(high*0.6667)-0.0095;
        let lTARGET2B = (close*0.3333)+(high*0.6667)-0.0127;

        // Right Side=Bearish Side
        let rTARGET2  = (close*0.3333)+(low*0.6667)+0.0127;
        let rBO2      = (close*0.6667)+(low*0.3333)+0.0095;
        let rHBO1     = (close<low) ? (0.3333*close)+(0.6667*low)-0.00115 : (0.3333*close)+(0.6667*low)+0.0042;
        let rTARGET1  = (close<low) ? (rHBO1+0.0053) : rHBO1;
        let rPV       = (close<low) ? (close*0.6667)+(low*0.3333)-0.00105 : (close*0.6667)+(low*0.3333)+0.001
        let rHBO      = rPV+0.0039;

        // missing the second condition
        let rMS       = (close<low) ?  (close*0.2500)+(low *0.7500)+0.00155: (close*0.2500)+(low*0.7500)+0.00155;
        let rLBO1     = (close<low) ? (hbo1-0.00315) : (0.2500*close)+(0.7500*low);
        let rLBO      = rPV-0.0039;
        let rTARGET1b = (close<low) ? (rLBO-0.0011) : (0.3333*close)+(0.6667*low)-0.0053;
        let rLBO2     = (close<low) ? (close*0.3333)+(low*0.6667)-0.0085 : (close*0.3333)+(low*0.6667)-0.0095;
        let rTARGET2b = (close*0.3333)+(low*0.6667)-0.0127;
        
        this.setState({
            lPV       : Math.round(lPV      * 10000) / 10000,// set
            lHBO      : Math.round(lHBO     * 10000) / 10000,// set
            lHBO1     : Math.round(lHBO1    * 10000) / 10000,// set
            lTARGET2  : Math.round(lTARGET2 * 10000) / 10000,// set
            lBO2      : Math.round(lBO2     * 10000) / 10000,// set
            lTARGET1  : Math.round(lTARGET1 * 10000) / 10000,// set
            lMS       : Math.round(lMS      * 10000) / 10000,// set
            lLBO1     : Math.round(lLBO1    * 10000) / 10000,// set
            lLBO      : Math.round(lLBO     * 10000) / 10000,// set
            lTARGET1B : Math.round(lTARGET1B* 10000) / 10000,// set
            lLBO2     : Math.round(lLBO2    * 10000) / 10000,// set
            lTARGET2B : Math.round(lTARGET2B* 10000) / 10000,// set
            rTARGET2  : Math.round(rTARGET2 * 10000) / 10000,// set
            rBO2      : Math.round(rBO2     * 10000) / 10000,// set
            rHBO1     : Math.round(rHBO1    * 10000) / 10000,// set
            rTARGET1  : Math.round(rTARGET1 * 10000) / 10000,// set
            rPV       : Math.round(rPV      * 10000) / 10000,// set
            rHBO      : Math.round(rHBO     * 10000) / 10000,// set
            rMS       : Math.round(rMS      * 10000) / 10000,// set
            rLBO1     : Math.round(rLBO1    * 10000) / 10000,// set
            rLBO      : Math.round(rLBO     * 10000) / 10000,// set
            rTARGET1b : Math.round(rTARGET1b* 10000) / 10000,
            rLBO2     : Math.round(rLBO2    * 10000) / 10000,// set
            rTARGET2b : Math.round(rTARGET2b* 10000) / 10000,// set
        })
    }    

    componentDidMount() {
        this.calculate();
    }
    
    
    render() {
        //console.log(this.state);
        return (
            <Grid container>
                <Grid.Row >
                    <Grid.Column>
                        <InputFields onChange={this.onChange} {...this.state}/>
                    </Grid.Column>                
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ResultFields {...this.state}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Calculator;