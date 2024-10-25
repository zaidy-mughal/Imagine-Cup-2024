// Array of speaker objects
const speakers = [
    {
        name: "Yochai Benkler",
        title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
        img: "images/shoaib.png"
    },
    {
        name: "SohYeong Noh",
        title: "Director of Art Centre Nabi and a board member of CC Korea",
        description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.",
        img: "images/starc.png"
    },
    {
        name: "Speaker 3",
        title: "Title 3",
        description: "Description 3.",
        img: "images/babar.png"
    },
    {
        name: "Speaker 4",
        title: "Title 4",
        description: "Description 4.",
        img: "images/imrankhan.png"
    },
    {
        name: "Speaker 5",
        title: "Title 5",
        description: "Description 5.",
        img: "images/rohit.png"
    },
    {
        name: "Speaker 6",
        title: "Title 6",
        description: "Description 6.",
        img: "images/dale.png"
    }
];

// Initial display count
let visibleSpeakers = 2;

// Function to dynamically add speaker content
function addSpeakers(startIndex, count) {
    const container = document.getElementById('all-speakers');
    
    speakers.slice(startIndex, startIndex + count).forEach(speaker => {
        // Create a speaker container
        const speakermain = document.createElement('div');
        speakermain.classList.add('speaker');

        const img = document.createElement('img');
        img.src = speaker.img;
        img.alt = speaker.name;
        speakermain.appendChild(img);

        const speakerDiv = document.createElement('div');
        speakerDiv.classList.add('speakerDetails');
        
        // Add speaker's name
        const name = document.createElement('h3');
        name.textContent = speaker.name;
        speakerDiv.appendChild(name);
        
        // Add speaker's title
        const title = document.createElement('h4');
        title.textContent = speaker.title;
        speakerDiv.appendChild(title);
        
        // Add speaker's description
        const description = document.createElement('p');
        description.textContent = speaker.description;
        speakerDiv.appendChild(description);
        
        speakermain.appendChild(speakerDiv)
        // Append the speaker div to the container
        container.appendChild(speakermain);
    });
}

// Function to load more speakers when "More" button is clicked
function loadMoreSpeakers() {
    // Add 4 more speakers or remaining speakers if fewer than 4 are left
    const remainingSpeakers = speakers.length - visibleSpeakers;
    const speakersToAdd = remainingSpeakers >= 4 ? 4 : remainingSpeakers;
    
    addSpeakers(visibleSpeakers, speakersToAdd);
    visibleSpeakers += speakersToAdd;

    // Hide the button if no more speakers are left
    if (visibleSpeakers >= speakers.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

// Load the initial 2 speakers
document.addEventListener('DOMContentLoaded', function() {
    addSpeakers(0, visibleSpeakers);
});

// Add event listener to "More" button
document.getElementById('load-more-btn').addEventListener('click', loadMoreSpeakers);
