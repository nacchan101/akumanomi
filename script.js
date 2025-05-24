document.addEventListener('DOMContentLoaded', function () {
    const checkboxContainer = document.getElementById('checkboxContainer');
    const carousel = document.getElementById('carousel');
    const carouselContainer = document.getElementById('carouselContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const heading = document.querySelector('h1');

    let currentSlide = 0;
    const selectedItems = [];
    let autoSlideInterval;
    let allSelected = false;
    
    const fruits = [
        {
            name: "Gum-Gum",
            displayName: "Gum-Gum Fruit",
            description: "A fruit that grants the user the ability to manipulate everything to rubber and was later announced it's origin, Human-Human Fruit Model: Nika.",
            imageFile: "fruit/gum.png"
        },
        {
            name: "Flame-Flame",
            displayName: "Flame-Flame Fruit",
            description: "A fruit that grants the user the ability of flame properties allowing the user to easily manipulate, produce, and turn into a flame at will.",
            imageFile: "fruit/flame.png"
        },
        {
            name: "Op-Op",
            displayName: "Op-Op Fruit",
            description: "A fruit that grants the user the ability to manipulate a spherical area, allowing them to surgically remodel anything and anyone within.",
            imageFile: "fruit/op.png"
        },
        {
            name: "Quake-Quake",
            displayName: "Quake-Quake Fruit",
            description: "A fruit that grants the user the ability to create shockwave attacks, causing damage through tremors that can summon huge tsunamis.",
            imageFile: "fruit/quake.png"
        },
        {
            name: "Dark-Dark",
            displayName: "Dark-Dark Fruit",
            description: "A fruit that grants the user the ability to create and control darkness that includes nullifying other Devil Fruit powers and absorbing attacks.",
            imageFile: "fruit/dark.png"
        },
        {
            name: "Rumble-Rumble",
            displayName: "Rumble-Rumble Fruit",
            description: "A fruit that grants the user the ability to create and control a lightning at will making the user to a Lightning Human.",
            imageFile: "fruit/rumble.png"
        },
        {
            name: "String-String",
            displayName: "String-String Fruit",
            description: "A fruit that grants the user the ability to create strings and manipulate others by attaching it to them making them a puppet.",
            imageFile: "fruit/string.png"
        },
        {
            name: "Revive-Revive",
            displayName: "Revive-Revive Fruit",
            description: "A fruit that grants the user the ability to come back to life after dying once, remaining alive until their body is sufficiently damaged.",
            imageFile: "fruit/revive.png"
        },
        {
            name: "Paw-Paw",
            displayName: "Paw-Paw Fruit",
            description: "A fruit that grants the user the ability to repel anything they touch, allowing them to send people or objects in paw-shaped bubbles.",
            imageFile: "fruit/paw.png"
        },
        {
            name: "Chop-Chop",
            displayName: "Chop-Chop Fruit",
            description: "A fruit that grants the user the ability to split their body into multiple pieces and control each piece individually and seperately.",
            imageFile: "fruit/chop.png"
        },
        {
            name: "Smoke-Smoke",
            displayName: "Smoke-Smoke Fruit",
            description: "A fruit that grants the user the ability to control and transform into a smoke at will creating dense fogs and vast mists used for blind attacks.",
            imageFile: "fruit/smoke.png"
        },
        {
            name: "Flower-Flower",
            displayName: "Flower-Flower Fruit",
            description: " A fruit that grants the user the ability to bloom or sprout parts like petals from a flower into an object or living thing to be able to control it.",
            imageFile: "fruit/flower.png"
        },
        {
            name: "Human-Human",
            displayName: "Human-Human Fruit",
            description: "A fruit that grants the user the ability to transform especially for animals who consumed this to a human or a human hybrid.",
            imageFile: "fruit/human.png"
        },
        {
            name: "Love-Love",
            displayName: "Love-Love Fruit",
            description: "A fruit that grants the user the ability to transform opponents into stone or petrify them using emotions of love, lust, or adoration towards the user.",
            imageFile: "fruit/love.png"
        },
        {
            name: "Ice-Ice",
            displayName: "Ice-Ice Fruit",
            description: "A fruit that grants the user the ability to create, control, and, transform into ice capable of freezing terrains, objects, and living things.",
            imageFile: "fruit/ice.png"
        },
        {
            name: "Magma-Magma",
            displayName: "Magma-Magma Fruit",
            description: "A fruit that grants the user the ability to produce, manipulate and transform into magma that can create meteor showers.",
            imageFile: "fruit/magma.png"
        },
        {
            name: "Light-Light",
            displayName: "Light-Light Fruit",
            description: "A fruit that grants the user the ability to construct, control and become light and can move and teleport via reflection at the speed of light.",
            imageFile: "fruit/light.png"
        },
        {
            name: "Sand-Sand",
            displayName: "Sand-Sand Fruit",
            description: "A fruit that grants the user the ability to control sand and manipulate it into various forms immuned to physical attacks that doesn't affect sand.",
            imageFile: "fruit/sand.png"
        },
        {
            name: "Cat-Cat",
            displayName: "Cat-Cat Fruit",
            description: "A fruit that grants the user the ability to move like a cat specifically a leopard capable of transforming to a full leopard or hybrid leopard.",
            imageFile: "fruit/cat.png"
        },
        {
            name: "Bomb-Bomb",
            displayName: "Bomb-Bomb Fruit",
            description: "A fruit that grants the user the ability to make any part of their body explode whether it be their limbs, hair, mucus, or even breath or cough.",
            imageFile: "fruit/bomb.png"
        },
        {
            name: "Smooth-Smooth",
            displayName: "Smooth-Smooth Fruit",
            description: "A fruit that grants the user the ability to make their body smooth and slip attacks off their body protecting them.",
            imageFile: "fruit/smooth.png"
        },
        {
            name: "Shadow-Shadow",
            displayName: "Shadow-Shadow Fruit",
            description: "A fruit that grants the user the ability to manipulate shadows and extracts living or non-living things to store and control them.",
            imageFile: "fruit/shadow.png"
        },
        {
            name: "Bird-Bird",
            displayName: "Bird-Bird Fruit",
            description: "A fruit that grants the user the ability to transform into large phoenix shrouded in blue flames, as well as a human-phoenix hybrid.",
            imageFile: "fruit/bird.png"
        },
        {
            name: "Magnet-Magnet",
            displayName: "Magnet-Magnet Fruit",
            description: "A fruit that grants the user the ability to generate magnetic fields that can attract or repel metals to and from their body.",
            imageFile: "fruit/magnet.png"
        },
        {
            name: "Fish-Fish",
            displayName: "Fish-Fish Fruit",
            description: "A fruit that grants the user the ability to turn into a giant, serpentine, a blue-scaled called azure dragon that can fire flames and create clouds.",
            imageFile: "fruit/fish.png"
        },
        {
            name: "Soul-Soul",
            displayName: "Soul-Soul Fruit",
            description: "A fruit that grants the user the ability to extend, give, and drain life by extracting and manipulating souls from the person that fears the user.",
            imageFile: "fruit/soul.png"
        },
        {
            name: "Mochi-Mochi",
            displayName: "Mochi-Mochi Fruit",
            description: "A fruit that granrs the user the ability to to create, control, and turn any part of their body into either soft, sticky, stretchy or hard mochi.",
            imageFile: "fruit/mochi.png"
        },
        {
            name: "Smile-Smile",
            displayName: "Smile-Smile Fruit",
            description: "A fruit that grants the user the ability to transform into full or hybrid powers or worst case, suppress other expression besides smiling.",
            imageFile: "fruit/smile.png"
        },
        {
            name: "Sing-Sing",
            displayName: "Sing-Sing Fruit",
            description: "A fruit that grants the user the ability to teleport people's consciousnesses into a virtual space created by the user itself just by singing.",
            imageFile: "fruit/sing.png"
        },
        {
            name: "Brain-Brain",
            displayName: "Brain-Brain Fruit",
            description: "A fruit that granrs the user the ability to expand their brain capacity to store infinite amount of knowledge and information.",
            imageFile: "fruit/brain.png"
        }
    ];

    function generateCheckboxes() {
        fruits.forEach(fruit => {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = fruit.name.toLowerCase();
            checkbox.value = fruit.name;

            const label = document.createElement('label');
            label.htmlFor = fruit.name.toLowerCase();

            const thumbnail = document.createElement('img');
            thumbnail.className = 'fruit-thumbnail';
            thumbnail.src = fruit.imageFile;
            thumbnail.alt = fruit.name;
            thumbnail.onerror = function () {
                this.style.display = 'none';
            };
          label.appendChild(document.createTextNode(fruit.name));
            label.appendChild(thumbnail);

            checkboxItem.appendChild(checkbox);
            checkboxItem.appendChild(label);
            checkboxContainer.appendChild(checkboxItem);

            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    if (!selectedItems.find(f => f.name === fruit.name)) {
                        selectedItems.push(fruit);
                    }
                } else {
                    const index = selectedItems.findIndex(f => f.name === fruit.name);
                    if (index > -1) selectedItems.splice(index, 1);
                }
            });
        });
    }

    function updateCarousel() {
        carousel.innerHTML = '';

        if (selectedItems.length === 0) {
            carouselContainer.classList.add('hidden');
            return;
        }
       carouselContainer.classList.remove('hidden');

        selectedItems.forEach(fruit => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            const title = document.createElement('div');
            title.className = 'carousel-title';
            title.textContent = fruit.displayName;

            const imageContainer = document.createElement('div');
            imageContainer.className = 'carousel-image-container';

            const image = document.createElement('img');
            image.className = 'carousel-image';
            image.src = fruit.imageFile;
            image.alt = fruit.name;
            image.onerror = function () {
                this.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
            };

            const description = document.createElement('div');
            description.className = 'carousel-description';
            description.textContent = fruit.description;

            imageContainer.appendChild(image);
            carouselItem.appendChild(title);
            carouselItem.appendChild(imageContainer);
            carouselItem.appendChild(description);
            carousel.appendChild(carouselItem);
        });

        showSlide(currentSlide);
        startAutoSlide();
    }

    function showSlide(index) {
        if (selectedItems.length === 0) return;

        if (index >= selectedItems.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = selectedItems.length - 1;
        } else {
            currentSlide = index;
        }

        carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    heading.addEventListener('click', () => {
        const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        checkboxes.forEach(cb => {
            cb.checked = !allChecked;
            cb.dispatchEvent(new Event('change'));
        });
    });

    submitBtn.addEventListener('click', updateCarousel);
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    document.addEventListener('keydown', (e) => {
        if (!carouselContainer.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
            else if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        }
    });

    generateCheckboxes();
});