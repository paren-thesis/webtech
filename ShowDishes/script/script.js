let choice = prompt("Choose from the list of dishes using the numbers \n1. Jollof Rice and chicken \n2. Banku with Okro Soup \n3. Kenkey with fish \n4. Sandwich \n5. Gob3 \n6. Fried Rice");

if (choice >= 1 && choice <= 5) {
    let food = null;
    if (choice == 1) {
        food = "Jollof Rice and chicken"
    }
    if (choice == 2) {
        food = "Banku with Okro Soup"
    }
    if (choice == 3) {
        food = "Kenkey with fish"
    }
    if (choice == 4) {
        food = " Sandwich"
    }
    if (choice == 5) {
        food = "Gob3"
    }
    if (choice == 6) {
        food = "Fried Rice"
    }
    alert('Enjoy your ' + food);
} else {
    alert('This dish is not in the menu');
}