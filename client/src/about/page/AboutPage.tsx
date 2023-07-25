import React from 'react';
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper,
} from '@mui/material';

function About() {
    const appName = process.env.REACT_APP_NAME;

    return (
        <Paper className="container">
            <Typography variant="h2" mb={2}>
                Welcome to
                {` ${appName}`}
                !
            </Typography>

            <Typography variant="body1" mb={2}>
                At
                {` ${appName}`}
                , we believe in simplifying log management for businesses and individuals alike.
                Our passion for efficiency and innovation led us to create an app that centralizes logs from
                external applications and keeps you informed through real-time notifications.
            </Typography>

            <Typography variant="h4">
                Our Journey:
            </Typography>
            <Typography variant="body1" mb={2}>
                {`${appName} `}
                started as a vision to tackle the challenges faced by IT professionals, developers,
                and businesses in managing logs from multiple sources. We understood the frustration of manually
                monitoring logs and the potential risks of missing critical events. Thus, we set out on a mission
                to develop a solution that would empower users to stay on top of their log data effortlessly.
            </Typography>

            <Typography variant="h4">
                What We Offer:
            </Typography>
            <Typography variant="body1" mb={2}>
                With
                {` ${appName}`}
                , you can say goodbye to the cumbersome task of log aggregation.
                Our app seamlessly integrates with your preferred applications, bringing all your logs under one roof.
                From system events to application errors,
                {` ${appName} `}
                keeps a keen eye on every log,
                ensuring nothing slips through the cracks.
            </Typography>

            <Typography variant="h4">
                Why Choose
                {` ${appName}`}
                :
            </Typography>
            <Typography variant="body1" mb={2}>
                Real-Time Notifications: Receive instant alerts about important log events,
                empowering you to take prompt action and prevent potential issues.
            </Typography>

            <Typography variant="h4">
                Customizable Settings:
            </Typography>
            <Typography variant="body1" mb={2}>
                Tailor your notification preferences, filters,
                and criteria to receive only the log data that matters most to you.
            </Typography>

            <Typography variant="h4">
                User-Friendly Interface:
            </Typography>
            <Typography variant="body1" mb={2}>
                We designed
                {` ${appName} `}
                to be intuitive and easy-to-use,
                so you can set it up and start benefiting from the app in no time.
            </Typography>

            <Typography variant="h4">
                Enhanced Security:
            </Typography>
            <Typography variant="body1" mb={2}>
                Your log data is precious, and we treat it as such.
                {` ${appName} `}
                ensures your logs are securely stored and accessible only to authorized personnel.
            </Typography>

            <Typography variant="h4">
                Empowering Your Business:
            </Typography>
            <Typography variant="body1" mb={2}>
                {` ${appName} `}
                isn&apos;t just an app; it&apos;s a tool that empowers your business
                with real-time insights, enabling better decision-making and heightened efficiency.
            </Typography>

            <Typography variant="h4">
                Our Commitment:
            </Typography>
            <Typography variant="body1" mb={2}>
                We are committed to providing you with a reliable and effective log management solution.
                Your feedback and suggestions play a crucial role in shaping the future of
                {` ${appName}`}
                , and we always welcome them with open arms.
                Join us on this exciting journey of streamlined log management and timely notifications.
                Experience the power of
                {` ${appName} `}
                and take control of your log monitoring process like never before.
            </Typography>

            <Typography variant="body1" mb={2}>
                Thank you for choosing
                {` ${appName}`}
                !
            </Typography>

            <Typography variant="h4">
                The
                {` ${appName} `}
                Team
            </Typography>
        </Paper>
    );
}

export default About;
