
        // function CallChef() {
        //     let hasCookbook = prompt("Do you have a Cookbook? (yes/no)");
        //     if (hasCookbook.toLowerCase() === "yes") {
        //         alert("This is good news, it means you may likely have the recipe we are looking for.");
        //         let hasChiliRecipe = prompt("So then, do you have the Chili Recipe? (yes/no)");
        //         if (hasChiliRecipe.toLowerCase() === "yes") {
        //             alert("This means you can go ahead and cook some pepperoni meal.");
        //         } else {
        //             let hasInternet = prompt("But do you have internet Access? (yes/no)");
        //             if (hasInternet.toLowerCase() === "yes") {
        //                 alert("This means we can locate some beautiful Chili Recipes online.");
        //             } else {
        //                 alert("Case closed. We may never cook the chili food.");
        //             }
        //         }
        //     } else {
        //         alert("Case closed. We may never cook the chili food.");
        //     }
        // }

        //This is 

        function CallChef() {
            let hasBook = prompt("Do you have a cookbook? (yes/no)");
            if (hasBook.toLowerCase() === "yes") {
                alert("This is good news");
                let hasRecipe = prompt("Do you have the recipe? (yes/no)");
                if (hasRecipe.toLowerCase() === "yes") {
                    alert("Then we can cook");
                } else {
                    let hasInternet = prompt("Do you have internet access? (yes/no)");
                    if (hasInternet.toLowerCase() === "yes") {
                        alert("We can get some recipes");
                    } else {
                        alert("Case closed we can never cook the food");
                    }
                }
            } else {
                alert("Case closed")
            }
        }
