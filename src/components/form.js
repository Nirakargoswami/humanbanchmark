//other import statements
import * as Yup from "yup";

import React, { useState } from "react";
import { withFormik } from "formik";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Card, Switch, Collapse, ListItemButton, ListItemText, CardContent, CardActions, TextField, MenuItem, Button, Typography } from "@mui/material"
import styles from "./form.css"
import { red } from "@mui/material/colors";


const Mianfrom = [
    "firstName",
    "lastName",

    "Mobileno",
    "email",


]

const Spouseform = [
    "SpousefirstName",
    "SpouselastName",
]
const Childform = [
    "ChildfirstName",
    "ChildlastName",
]

const Gender = [
    {
        value: "Male",
        label: "Male"
    },
    {
        value: "female",
        label: "female"
    },

];
const Service = [
    {
        value: "CAnedapr",
        label: "Canedapr"
    },
    {
        value: "Student",
        label: "Student"
    },

];


const form = props => {


    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setTouched,
        open,
        onClick,
        Sposecehk,
        spouse,
        noofchild,
        Addchild,
        Remove,
        Childchekclick,
        childchek
    } = props;

    console.log(touched)
    console.log(values)

    return (

        <div className={styles.container}>

            <Collapse in={open} timeout="auto" unmountOnExit>

                <form onSubmit={handleSubmit}>
                    <Card className={styles.card}>
                        <CardContent className="BOX">
                            {
                                Mianfrom.map((x) => {
                                    return (
                                        <div className="formbox">
                                            <Typography variant="button"  >
                                                {x}
                                            </Typography>
                                            <TextField
                                                id={`${x}`}

                                                value={values.x}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched[`${x}`] ? errors[`${x}`] : ""}
                                                margin="dense"
                                                inputProps={{ style: { fontFamily: "Arial", borderLeft: touched[`${x}`] ? null : "2px solid red" } }}
                                                sx={{ width: "80%", borderLeft: "red" }}
                                            />

                                        </div>
                                    )
                                })

                            }

                            <div className="formbox">
                                <Typography variant="button"  >
                                    Gender
                                </Typography>
                                <TextField
                                    select
                                    id="Gender"
                                    label="Gender Category"
                                    value={values.Gender}
                                    onChange={handleChange("Gender")}
                                    helperText={touched.Gender ? errors.Gender : ""}
                                    inputProps={{ style: { fontFamily: "Arial", borderLeft: touched.Gender && "2px solid red" } }}
                                    margin="dense"
                                    variant="outlined"
                                    sx={{ width: "80%", borderLeft: "red" }}
                                >
                                    {Gender.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className="formbox">
                                <Typography variant="button"  >
                                    Service
                                </Typography>
                                <TextField
                                    select
                                    id="Service"
                                    label="Service Category"
                                    value={values.Service}
                                    onChange={handleChange("Service")}

                                    inputProps={{ style: { fontFamily: "Arial", borderLeft: touched.Service && "2px solid red" } }}
                                    margin="dense"
                                    variant="outlined"
                                    sx={{ width: "80%", borderLeft: "red" }}
                                >
                                    {Service.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className="formbox">
                                <Typography variant="button"  >
                                    Date
                                </Typography>
                                <TextField
                                    id="date"
                                    onChange={handleChange("date")}

                                    value={values.date}
                                    label="Birthday"
                                    type="date"
                                    inputProps={{ style: { fontFamily: "Arial" } }}
                                    sx={{ width: "80%" ,mt:2}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="formbox">
                                <Typography variant="button"  >
                                    regesterdate
                                </Typography>
                                <TextField
                                    id="regesterdate"
                                    label="regesterdate"
                                    type="date"
                                    onChange={handleChange("regesterdate")}

                                    value={values.regesterdate}

                                    inputProps={{ style: { fontFamily: "Arial" } }}
                                    sx={{ width: "80%" , mt:2}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>


                        </CardContent>
                        <CardActions className="actions">
                            <Typography>Spouse</Typography>
                            <Switch
                                id="checked"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography>Child</Typography>
                            <Switch
                                id="Childchecked"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Button type="submit" color="primary" disabled={isSubmitting}>
                                SUBMIT
                            </Button>


                        </CardActions>
                        {
                            values.checked &&
                            <div>
                                <div className="DROPER">
                                    <ListItemButton

                                        id="Spouse"
                                        onClick={Sposecehk}>

                                        <ListItemText />
                                        {spouse ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>

                                </div>
                                <Collapse in={spouse} timeout="auto" unmountOnExit>
                                    <CardContent className="BOX">
                                        {
                                            Spouseform.map((x) => {
                                                return (
                                                    <div className="formbox">
                                                        <Typography variant="button"  >
                                                            {x}
                                                        </Typography>
                                                        <TextField
                                                            id={`${x}`}

                                                            value={values.x}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            helperText={touched[`${x}`] ? errors[`${x}`] : ""}
                                                            margin="dense"
                                                            inputProps={{ style: { fontFamily: "Arial", borderLeft: touched[`${x}`] ? null : "2px solid red" } }}
                                                            sx={{ width: "70%", borderLeft: "red" }}
                                                        />

                                                    </div>
                                                )
                                            })

                                        }
                                        <div className="formbox">
                                            <Typography variant="button"  >
                                                Date
                                            </Typography>
                                            <TextField
                                                id="Spousedate"
                                                onChange={handleChange("date")}

                                                value={values.Spousedate}
                                                label="Birthday"
                                                type="date"
                                                inputProps={{ style: { fontFamily: "Arial" } }}
                                                sx={{ width: "80%", mt:2 }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </div>
                                    </CardContent >
                                </Collapse>
                            </div>
                        }
                        {
                            values.Childchecked &&
                            <div>
                                <div className="DROPER">
                                    <ListItemButton

                                        id="Spouse"
                                        onClick={Childchekclick}>

                                        <ListItemText />
                                        {childchek ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>

                                </div>
                                <Collapse in={childchek} timeout="auto" unmountOnExit>
                                    { noofchild && 
                                        noofchild.map((x) => {
                                            return (
                                                <CardContent className="BOX">
                                                    {
                                                        Childform.map((x) => {
                                                            return (
                                                                <div className="formbox">
                                                                    <Typography variant="button"  >
                                                                        {x}
                                                                    </Typography>
                                                                    <TextField
                                                                        id={`${x}`}

                                                                        value={values.x}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        helperText={touched[`${x}`] ? errors[`${x}`] : ""}
                                                                        margin="dense"
                                                                        inputProps={{ style: { fontFamily: "Arial", borderLeft: touched[`${x}`] ? null : "2px solid red" } }}
                                                                        sx={{ width: "70%", borderLeft: "red" }}
                                                                    />

                                                                </div>
                                                            )
                                                        })

                                                    }
                                                    <div className="formbox">
                                                        <Typography variant="button"  >
                                                            Date
                                                        </Typography>
                                                        <TextField
                                                            id="Childbirthdate"
                                                            onChange={handleChange("date")}

                                                            value={values.Spousedate}
                                                            label="Birthday"
                                                            type="date"
                                                            inputProps={{ style: { fontFamily: "Arial" } }}
                                                            sx={{ width: "80%", mt:2 }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                    <Button onClick={Remove} sx={{ml:2,p:0}} variant="contained">Delete </Button>
                                                </CardContent >
                                            )
                                        })
                                    }

                                    <Button  onClick={Addchild} sx={{ ml: 2 }} variant="contained">Add child</Button>
                                </Collapse>

                            </div>
                        }
                    </Card>

                </form>
            </Collapse>
        </div>
    );
};
const Form = withFormik({


    mapPropsToValues: ({
        firstName,
        lastName,
        email,
        Gender,
        Service,
        regesterdate,
        Mobileno,
        date,
        checked,
        Spouse,
        SpousefirstName,
        SpouselastName,
        Spousedate,
        Childchecked,
        ChildfirstName,
        ChildlastName,
        Childbirthdate
    }) => {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            Gender: Gender || "",
            Service: Service || "",
            regesterdate: regesterdate || "",
            Mobileno: Mobileno || "",
            date: date || "",
            checked: checked || false,
            Childchecked: Childchecked || false,
            Spouse: checked || false,
            SpousefirstName: SpousefirstName || "",
            SpouselastName: SpouselastName || "",
            Spousedate: Spousedate || "",
            ChildfirstName: ChildfirstName || "",
            ChildlastName: ChildlastName || "",
            Childbirthdate: Childbirthdate || "",
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),
        Mobileno: Yup.string().required("Mobile no is required"),
        Gender: Yup.string().required("Gender no is required"),
        Service: Yup.string().required("Service  is required"),
        date: Yup.string().required("regesterdate  your password"),

        regesterdate: Yup.string().required("regesterdate  your password"),

    }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

})(form);

const Myfrom = () => {
    const [open, setopen] = useState(true)
    const [checked, setChecked] = useState(true);
    const [spouse, setSpouse] = useState(true)
    const [noofchild, setNofchild] = useState([1, 2])
const [childchek,setChildcehk] = useState(true)

    const Addchild = () => {
        let No = (noofchild.length - 1)
          const New =  noofchild.concat([No + 1])
          console.log(New)
        
        
        setNofchild(New)
    }

    const Remove = () => {
        var newArr = noofchild.slice(0, -1)
        setNofchild(newArr)
    }
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const onClick = () => {
        setopen(!open)
    }
    const Sposecehk = () => {
        setSpouse(!spouse)
    }
    const Childchekclick = () => {
        setChildcehk(!childchek)
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="DROPER">

                <ListItemButton onClick={onClick}>

                    <ListItemText />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

            </div>
            <Form  Childchekclick={Childchekclick}  childchek={childchek}   open={open}Remove={Remove} Addchild={Addchild} noofchild={noofchild} spouse={spouse} onClick={onClick} Sposecehk={Sposecehk} />

        </div>

    )
}



export default Myfrom;