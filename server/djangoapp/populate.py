from .models import CarMake, CarModel


def initiate():
    car_make_data = [
        {
            "name": "NISSAN",
            "description": "Great cars. Japanese technology",
            "country": "Japan",
            "founded_year": 1933,
            "headquarters": "Yokohama, Japan",
            "website": "https://www.nissan-global.com/",
            "logo": (
                "https://upload.wikimedia.org/wikipedia/commons/2/23/"
                "Nissan_2020_logo.svg"
            ),
            "is_active": True
        },
        {
            "name": "Mercedes",
            "description": "Great cars. German technology",
            "country": "Germany",
            "founded_year": 1926,
            "headquarters": "Stuttgart, Germany",
            "website": "https://www.mercedes-benz.com/",
            "logo": (
                "https://upload.wikimedia.org/wikipedia/commons/9/90/"
                "Mercedes-Logo.svg"
            ),
            "is_active": True
        },
        {
            "name": "Audi",
            "description": "Great cars. German technology",
            "country": "Germany",
            "founded_year": 1909,
            "headquarters": "Ingolstadt, Germany",
            "website": "https://www.audi.com/",
            "logo": (
                "https://upload.wikimedia.org/wikipedia/commons/9/92/"
                "Audi_Logo.svg"
            ),
            "is_active": True
        },
        {
            "name": "Kia",
            "description": "Great cars. Korean technology",
            "country": "South Korea",
            "founded_year": 1944,
            "headquarters": "Seoul, South Korea",
            "website": "https://www.kia.com/",
            "logo": (
                "https://upload.wikimedia.org/wikipedia/commons/4/47/"
                "KIA_logo2.svg"
            ),
            "is_active": True
        },
        {
            "name": "Toyota",
            "description": "Great cars. Japanese technology",
            "country": "Japan",
            "founded_year": 1937,
            "headquarters": "Toyota City, Japan",
            "website": "https://global.toyota/",
            "logo": (
                "https://upload.wikimedia.org/wikipedia/commons/9/9d/"
                "Toyota_carlogo.svg"
            ),
            "is_active": True
        },
    ]

    car_make_instances = []

    for data in car_make_data:
        car_make_instances.append(
            CarMake.objects.create(
                name=data["name"],
                description=data["description"],
                country=data["country"],
                founded_year=data["founded_year"],
                headquarters=data["headquarters"],
                website=data["website"],
                logo=data["logo"],
                is_active=data["is_active"]
            )
        )

    car_model_data = [
        {
            "name": "Pathfinder",
            "type": "SUV",
            "year": 2023,
            "dealer_id": 1,
            "description": "A spacious Nissan SUV for families.",
            "car_make": car_make_instances[0]
        },
        {
            "name": "Qashqai",
            "type": "SUV",
            "year": 2023,
            "dealer_id": 1,
            "description": (
                "A compact Nissan SUV designed for everyday driving."
            ),
            "car_make": car_make_instances[0]
        },
        {
            "name": "XTRAIL",
            "type": "SUV",
            "year": 2023,
            "dealer_id": 1,
            "description": "A versatile Nissan SUV with practical features.",
            "car_make": car_make_instances[0]
        },
        {
            "name": "A-Class",
            "type": "HATCHBACK",
            "year": 2023,
            "dealer_id": 2,
            "description": (
                "A compact Mercedes-Benz model with modern technology."
            ),
            "car_make": car_make_instances[1]
        },
        {
            "name": "C-Class",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 2,
            "description": "A premium Mercedes-Benz sedan.",
            "car_make": car_make_instances[1]
        },
        {
            "name": "E-Class",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 2,
            "description": "A luxury Mercedes-Benz sedan focused on comfort.",
            "car_make": car_make_instances[1]
        },
        {
            "name": "A4",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 3,
            "description": "A premium Audi sedan with advanced technology.",
            "car_make": car_make_instances[2]
        },
        {
            "name": "A5",
            "type": "COUPE",
            "year": 2023,
            "dealer_id": 3,
            "description": "A stylish Audi model with sporty performance.",
            "car_make": car_make_instances[2]
        },
        {
            "name": "A6",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 3,
            "description": "A premium Audi executive sedan.",
            "car_make": car_make_instances[2]
        },
        {
            "name": "Sorrento",
            "type": "SUV",
            "year": 2023,
            "dealer_id": 4,
            "description": "A spacious Kia SUV suitable for families.",
            "car_make": car_make_instances[3]
        },
        {
            "name": "Carnival",
            "type": "VAN",
            "year": 2023,
            "dealer_id": 4,
            "description": (
                "A practical Kia vehicle designed for larger families."
            ),
            "car_make": car_make_instances[3]
        },
        {
            "name": "Cerato",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 4,
            "description": "A compact Kia sedan for everyday driving.",
            "car_make": car_make_instances[3]
        },
        {
            "name": "Corolla",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 5,
            "description": "A reliable Toyota sedan for everyday use.",
            "car_make": car_make_instances[4]
        },
        {
            "name": "Camry",
            "type": "SEDAN",
            "year": 2023,
            "dealer_id": 5,
            "description": "A comfortable Toyota midsize sedan.",
            "car_make": car_make_instances[4]
        },
        {
            "name": "Kluger",
            "type": "SUV",
            "year": 2023,
            "dealer_id": 5,
            "description": "A spacious Toyota SUV designed for family travel.",
            "car_make": car_make_instances[4]
        },
    ]

    for data in car_model_data:
        CarModel.objects.create(
            name=data["name"],
            car_make=data["car_make"],
            dealer_id=data["dealer_id"],
            type=data["type"],
            year=data["year"],
            description=data["description"]
        )
