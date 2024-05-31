let card = document.getElementById("carRow");

const cars = [{
    make: "Ford",
    model: "Mustang",
    year: 2023,
    color: "Yellow",
    mileage: 10000,
    engine: {
        type: "V8",
        horsepower: 400,
    },
    features: ["Sunroof", "Leather Seats", "Navigation"],
    url: "img/car1.avif"
}, {
    make: "Chevrolet",
    model: "Corvette",
    year: 2024,
    color: "red",
    mileage: 5000,
    engine: {
        type: "V6",
        horsepower: 350
    },
    features: ["Convertible", "Performance Exhaust", "Bose Sound System"],
    url: "img/car2.jpeg"
}, {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 20000,
    engine: {
        type: "I4",
        horsepower: 203
    },
    features: ["Sunroof", "Remote Keyless Entry", "Toyota Safety Sense"],
    url: "img/car3.webp"
}, {
    make: "Honda",
    model: "Civic",
    year: 2023,
    color: "Blue",
    mileage: 15000,
    engine: {
        type: "I4",
        horsepower: 158
    },
    features: ["Fuel Efficient", "Honda Sensing Suite", "Moonroof"],
    url: "img/car4.avif"
}, {
    make: "Nissan",
    model: "Maxima",
    year: 2021,
    color: "Black",
    mileage: 35000,
    engine: {
        type: "V6",
        horsepower: 300
    },
    features: ["Spacious Interior", "All-Wheel Drive", "Bose Audio System"],
    url: "img/car5.webp"
}, {
    make: "Hyundai",
    model: "Sonata",
    year: 2024,
    color: "Gray",
    mileage: 2000,
    engine: {
        type: "I4",
        horsepower: 180
    },
    features: ["Smart Cruise Control"],
    url: "img/car6.jpeg"
}, {
    make: "Kia",
    model: "Optima",
    year: 2022,
    color: "White",
    mileage: 18000,
    engine: {
        type: "I4",
        horsepower: 228
    },
    features: ["Panoramic Sunroof", "Harman Kardon Sound System", "Blind Spot Monitoring"],
    url: "img/car7.png"
}, {
    make: "Subaru",
    model: "WRX",
    year: 2024,
    color: "World Rally Blue",
    mileage: 8000,
    engine: {
        type: "Turbocharged Boxer",
        horsepower: 271
    },
    features: ["All-Wheel Drive", "Performance Handling", "Sport Seats"],
    url: "img/car8.jpeg"
}, {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Black",
    mileage: 40000,
    engine: {
        type: "Electric",
        horsepower: 350
    },
    features: ["Autopilot", "Full Self-Driving Capability (optional)", "Panoramic Glass Roof"],
    url: "img/car9.jpeg"
}, {
    make: "BMW",
    model: "3 Series",
    year: 2022,
    color: "Jet Black",
    mileage: 25000,
    engine: {
        type: "I4",
        horsepower: 255
    },
    features: ["Luxury Interior", "Sporty Handling", "Driver Assistance Package"],
    url: "img/car10.jpeg"
}, {
    make: "Dodge",
    model: "Challenger",
    year: 2024,
    color: "Hematite Orange",
    mileage: 7500,
    engine: {
        type: "V6",
        horsepower: 305
    },
    features: ["Widebody Package (optional)", "Spoiler", "Uconnect Infotainment System"],
    url: "img/car11.png"
}, {
    make: "Mazda",
    model: "MX-5 Miata",
    year: 2023,
    color: "Soul Red Crystal Metallic",
    mileage: 12000,
    engine: {
        type: "I4",
        horsepower: 181
    },
    features: ["Retractable Hardtop", "Apple CarPlay/Android Auto", "Bose Sound System"],
    url: "img/car12.png"
}, {
    make: "Jeep",
    model: "Wrangler",
    year: 2024,
    color: "Sarge Green",
    mileage: 15000,
    engine: {
        type: "V6",
        horsepower: 285
    },
    features: ["Removable Doors and Top", "CommandTrac 4WD System", "Off-road Tires"],
    url: "img/car13.webp"
}, {
    make: "Volvo",
    model: "XC60",
    year: 2023,
    color: "Inscription Inscription Gray Metallic",
    mileage: 20000,
    engine: {
        type: "I4",
        horsepower: 250
    },
    features: ["Sensus Connect Infotainment", "Heated Seats", "Pilot Assist Driver Assistance"],
    url: "img/car14.jpeg"
}, {
    make: "Toyota",
    model: "Prius",
    year: 2024,
    color: "Supersonic Silver",
    mileage: 35000,
    engine: {
        type: "Hybrid",
        horsepower: 122
    },
    features: ["Toyota Safety Sense 2.0", "EV Mode for short electric-only driving", "Spacious Interior"],
    url: "img/car15.jpeg"
}, {
    make: "Audi",
    model: "A4",
    year: 2022,
    color: "Mythos Black Metallic",
    mileage: 28000,
    engine: {
        type: "I4",
        horsepower: 201
    },
    features: ["Virtual Cockpit Digital Dashboard", "Audi Connect Telematics", "Sunroof"],
    url: "img/car16.jpeg"
}, {
    make: "Hyundai",
    model: "Ioniq 5",
    year: 2023,
    color: "Cyber Teal",
    mileage: 10000,
    engine: {
        type: "Electric",
        horsepower: 320
    },
    features: ["Ultra-fast DC Charging", "V2L (vehicle-to-load) capability", "Panoramic Glass Roof"],
    url: "img/car17.jpeg"
}, {
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2023,
    color: "Cornflower Blue",
    mileage: 14000,
    engine: {
        type: "I4",
        horsepower: 241
    },
    features: ["Sporty Handling", "Heated Seats", "Panoramic Sunroof (optional)"],
    url: "img/car18.jpeg"
}, {
    make: "Mini",
    model: "Cooper S",
    year: 2024,
    color: "Chili Red",
    mileage: 9000,
    engine: {
        type: "I4",
        horsepower: 189
    },
    features: ["Go-Kart Handling", "Unique Design", "Union Jack Taillights"],
    url: "img/car19.jpeg"
}, {
    make: "Ford",
    model: "F-150",
    year: 2023,
    color: "Lead Foot Gray",
    mileage: 25000,
    engine: {
        type: "V8",
        horsepower: 400
    },
    features: ["EcoBoost Hybrid Engine (optional)", "Max Trailer Tow Capability", "Pro Power Onboard (optional)"],
    url: "img/car20.jpeg"
}]

cars.forEach((element) => {
    carRow.innerHTML += `<div class="col-4 mt-5">
        <div class="card" style="width: 100%;">
            <img src="${element.url}" class="card-img-top" alt="images">
                <div class="card-body">
                <h5 class="card-title">${element.make}</h5>
                <h4 class="card-title">${element.model}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">The manufacturing year of the car ${element.year}</li>
                    <li class="list-group-item">The car's exterior color ${element.color}</li>
                    <li class="list-group-item">The total distance traveled by the car ${element.mileage}</li>
                    <li class="list-group-item">The Car engine version is ${element.engine.type} and Horsepower is ${element.engine.horsepower}</li>
                    <li class="list-group-item">Car Features Like ${element.features}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-info">More Info</button>
                </div>
        </div>
    </div>`
})