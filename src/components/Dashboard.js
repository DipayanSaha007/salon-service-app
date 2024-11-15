import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/Dashboard.module.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear authentication state here if needed, such as localStorage or sessionStorage

        // Navigate to the home page ("/")
        navigate('/');
    };

    return (
        <div 
            className={styles.container} // Apply the CSS module class
        >
            {/* Sign Out Button */}
            <div className={styles.signOutBtn}>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>

            <h2>Welcome to your Dashboard!</h2>

            {/* Available Services Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Available Services</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Check out our <Link to="/new-service">"New Services"</Link> to book an appointment.</p>
                </div>
            </div>

            {/* Your Appointments Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Your Appointments</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>List of Your Appointments. <Link to="/appointment">"Appointment"</Link></p>
                </div>
            </div>

            {/* Online Store Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Online Store</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Check out our <Link to="/online-store">"Online Store"</Link> to buy a product.</p>
                </div>
            </div>

            {/* Staff Management Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Staff Management</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Check out our <Link to="/staff-management">"Staffs and Ratings"</Link> to know more.</p>
                </div>
            </div>

            {/* Edit Profile Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Edit Profile</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Update your profile details. <Link to="/edit-profile">"Edit Profile"</Link></p>
                </div>
            </div>

            {/* Customer Query Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Customer Queries</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Have any questions? Reach out to us. <Link to="/customer-query">"Submit a Query"</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
