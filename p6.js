// This function runs when the page loads (HW6 Requirement)
function initializePage() {
    console.log("Page loaded - initializing event listeners");

    // Add event listeners to the activity buttons (HW6 Requirement)
    document.getElementById('mondayBtn').addEventListener('click', showMondayActivities);
    document.getElementById('tuesdayBtn').addEventListener('click', showTuesdayActivities);
    document.getElementById('wednesdayBtn').addEventListener('click', showWednesdayActivities);

    // Add event listener to the registration form (HW6 Requirement)
    document.getElementById('registrationForm').addEventListener('submit', handleRegistration);

    // Previous event listeners from HW4
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        alert("Thanks for your interest! This is a demo for Homework 6 showing Bootstrap functionality.");
    });

    const viewDetailsBtns = document.querySelectorAll('.viewDetailsBtn');
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            alert(`You clicked on ${service} details. This would normally show more information about this service.`);
        });
    });

    const navLinks = document.querySelectorAll('.navLink');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.textContent.toLowerCase();
            alert(`This would navigate to the ${target} section.`);
        });
    });
}

// Activity button functions (HW6 Requirement)
function showMondayActivities() {
    const activities = [
        "9:00 AM - Team Meeting",
        "11:00 AM - Client Workshop",
        "2:00 PM - Code Review",
        "4:00 PM - Research & Development"
    ];
    displayActivities("Monday", activities);
}

function showTuesdayActivities() {
    const activities = [
        "10:00 AM - Project Planning",
        "12:00 PM - Lunch & Learn Session",
        "3:00 PM - UI/UX Design Review",
        "5:00 PM - Networking Event"
    ];
    displayActivities("Tuesday", activities);
}

function showWednesdayActivities() {
    const activities = [
        "8:30 AM - Morning Standup",
        "10:30 AM - Client Presentation",
        "1:00 PM - Mentorship Session",
        "3:30 PM - Training Workshop"
    ];
    displayActivities("Wednesday", activities);
}

function displayActivities(day, activities) {
    const output = document.getElementById('activitiesOutput');
    let html = `<h3>${day} Schedule</h3><ul class="list-unstyled">`;
    
    activities.forEach(activity => {
        html += `<li><i class="far fa-calendar-check mr-2"></i>${activity}</li>`;
    });
    
    html += `</ul>`;
    output.innerHTML = html;
    
    // Add animation
    output.style.animation = 'none';
    void output.offsetWidth; // Trigger reflow
    output.style.animation = 'fadeIn 0.5s ease-out';
}

// Registration form handler (HW6 Requirement)
function handleRegistration(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const password = document.getElementById('regPassword').value;
    const course = document.getElementById('regSelection').value;
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    
    const courseNames = {
        'web': 'Web Development',
        'data': 'Data Science',
        'design': 'UX/UI Design',
        'mobile': 'Mobile App Development'
    };
    
    const message = `Thank you, ${name}!\n\n` +
                   `You've registered for: ${courseNames[course] || 'Unknown Course'}\n\n` +
                   "We'll send more details to your email soon.";
    
    alert(message);
    
    // Reset form
    event.target.reset();
    
    // Show success alert
    const successAlert = document.getElementById('successAlert');
    successAlert.style.display = 'block';
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 3000);
}

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);