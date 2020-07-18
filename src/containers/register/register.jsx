import React,{Component} from 'react'
import{
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            password2:'',
            type:'employee'
        }
        this.handleChange = this.handleChange.bind(this);
        this.toLogin = this.toLogin.bind(this);
    }

    //collect the input information and store it to state
    handleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }

    //jump to the Login router
    toLogin=()=>{
        this.props.history.replace('/login');
    }

    //register
    register=()=>{
       console.log(JSON.stringify(this.state));
    }

    render(){
        const {type} = this.state;
        return(
            <div>
                <NavBar>Hiring management</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem placeholder="Please enter username" onChange={val=>this.handleChange('username',val)}>
                            Username:
                        </InputItem>
                        <WhiteSpace />
                        <InputItem placeholder="Please enter password" onChange={val=>this.handleChange('password',val)}>
                            Password:
                        </InputItem>
                        <WhiteSpace />
                        <InputItem placeholder="Please re-enter password" onChange={val=>this.handleChange('password2',val)}>
                            Password:
                        </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span style={{marginRight:30}}>User type:</span>
                            <Radio checked={this.state.type==='employee'} onClick={()=>this.handleChange('type','employee')}>Employee</Radio>
                            <Radio checked={this.state.type==='employer'} onClick={()=>this.handleChange('type','employer')}>Employer</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>Register</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>Alreay has an account</Button>
                    </List>
                </WingBlank>
                <div>Register</div>
            </div>
        )
    }
}