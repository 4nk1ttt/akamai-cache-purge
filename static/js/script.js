// // document.addEventListener("DOMContentLoaded", function () {
// //     const selection = document.getElementById("selection");
// //     const hostnameDropdownContainer = document.getElementById("hostname-dropdown-container");
// //     const hostnameDropdown = document.getElementById("hostname-dropdown");
// //     const inputField = document.getElementById("input-field");
// //     const addButton = document.getElementById("add-btn");
// //     const valuesList = document.getElementById("values-list");
// //     const submitButton = document.getElementById("submit-btn");
// //     const responseDiv = document.getElementById("response");

// //     let values = []; // Stores added URLs or CP codes

// //     // Prefilled hostnames with CP codes
// //     const hostnamesWithCpCodes = {
// //         "dev-admin.pluang.org": "1490420",
// //         "dev-api-core.pluang.org": "1490438",
// //         "dev-api-pluang.org": "1490444",
// //         "website-dev.pluang.org": "1490456",
// //         "image-cdn.pluang.org": "1492527",
// //         "www.pluang.com": "1558114", // Production
// //         "admin.pluang.com": "1558123", // Production
// //         "www.pluang.org": "1558114",
// //         "admin-test.pluang.com": "1763411",
// //         "development-main.pluang.org": "1558856",
// //     };

// //     // Populate hostname dropdown
// //     function populateHostnameDropdown() {
// //         hostnameDropdown.innerHTML = "";
// //         for (const [hostname, cpCode] of Object.entries(hostnamesWithCpCodes)) {
// //             const option = document.createElement("option");
// //             option.value = cpCode;
// //             option.textContent = hostname;
// //             hostnameDropdown.appendChild(option);
// //         }
// //     }

// //     // Handle selection type change
// //     selection.addEventListener("change", function () {
// //         if (selection.value === "hostname") {
// //             hostnameDropdownContainer.style.display = "block";
// //             inputField.style.display = "none"; // Hide URL input
// //             addButton.style.display = "none"; // Hide Add button
// //             populateHostnameDropdown();
// //         } else if (selection.value === "url") {
// //             hostnameDropdownContainer.style.display = "none"; // Hide dropdown
// //             inputField.style.display = "block"; // Show URL input
// //             addButton.style.display = "block"; // Show Add button
// //         }
// //         values = [];
// //         valuesList.innerHTML = ""; // Clear previous selections
// //     });

// //     // Add URL to the list
// //     addButton.addEventListener("click", function () {
// //         const value = inputField.value.trim();
// //         if (!value) {
// //             alert("Please enter a valid URL.");
// //             return;
// //         }
// //         if (!values.includes(value)) {
// //             values.push(value);

// //             // Create list item
// //             let listItem = document.createElement("li");
// //             listItem.classList.add("list-group-item");
// //             listItem.textContent = value;

// //             // Add remove button
// //             let removeBtn = document.createElement("button");
// //             removeBtn.innerHTML = "&times;";
// //             removeBtn.classList.add("btn-delete");
// //             removeBtn.onclick = function () {
// //                 values = values.filter((v) => v !== value);
// //                 listItem.remove();
// //             };

// //             listItem.appendChild(removeBtn);
// //             valuesList.appendChild(listItem);
// //         }

// //         inputField.value = ""; // Clear input field
// //     });

// //     // Submit purge request
// //     submitButton.addEventListener("click", function () {
// //         let apiEndpoint = "";
// //         let requestBody = {};

// //         if (selection.value === "hostname") {
// //             const selectedCpCode = hostnameDropdown.value;
// //             if (!selectedCpCode) {
// //                 alert("Please select a valid hostname.");
// //                 return;
// //             }
// //             apiEndpoint = "/ccu/v3/invalidate/cpcode/";
// //             requestBody = { objects: [parseInt(selectedCpCode)] }; // Convert to integer

// //         } else if (selection.value === "url") {
// //             if (values.length === 0) {
// //                 alert("Please add at least one URL.");
// //                 return;
// //             }
// //             apiEndpoint = "/ccu/v3/invalidate/url/";
// //             requestBody = { objects: values };
// //         }

// //         fetch(apiEndpoint, {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(requestBody),
// //         })
// //             .then((response) => response.json())
// //             .then((data) => {
// //                 responseDiv.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
// //                 setTimeout(() => (responseDiv.innerHTML = ""), 5000);
// //             })
// //             .catch((error) => {
// //                 responseDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
// //                 setTimeout(() => (responseDiv.innerHTML = ""), 5000);
// //             });
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//     const inputField = document.getElementById("input-field");
//     const valuesList = document.getElementById("values-list");
    
//     let values = []; // Stores added URLs or CP codes
    
//     // Automatically add multiple URLs pasted into the input field
//     inputField.addEventListener("paste", function (event) {
//         const clipboardData = event.clipboardData || window.clipboardData;
//         const pastedData = clipboardData.getData("text");

//         // Split pasted data by lines and add each unique URL to the list
//         const urls = pastedData.split("\n").map(url => url.trim()).filter(url => url);
//         urls.forEach(url => {
//             if (!values.includes(url)) {
//                 values.push(url);

//                 // Create list item
//                 let listItem = document.createElement("li");
//                 listItem.classList.add("list-group-item");
//                 listItem.textContent = url;

//                 // Add remove button
//                 let removeBtn = document.createElement("button");
//                 removeBtn.innerHTML = "&times;";
//                 removeBtn.classList.add("btn-delete");
//                 removeBtn.onclick = function () {
//                     values = values.filter((v) => v !== url);
//                     listItem.remove();
//                 };

//                 listItem.appendChild(removeBtn);
//                 valuesList.appendChild(listItem);
//             }
//         });

//         inputField.value = ""; // Clear input field after paste
//         event.preventDefault(); // Prevent default paste behavior
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const selection = document.getElementById("selection");
//     const hostnameDropdownContainer = document.getElementById("hostname-dropdown-container");
//     const hostnameDropdown = document.getElementById("hostname-dropdown");
//     const tagDropdownContainer = document.getElementById("tag-dropdown-container");
//     const tagDropdown = document.getElementById("tag-dropdown");
//     const inputField = document.getElementById("input-field");
//     const valuesList = document.getElementById("values-list");
//     const submitButton = document.getElementById("submit-btn");
//     const responseDiv = document.getElementById("response");

//     let values = [];

//     // Populate dropdowns dynamically from backend data
//     fetch("/").then(response => response.json()).then(data => {
//         Object.entries(data.hostnames).forEach(([hostname, cpCode]) => {
//             const option = document.createElement("option");
//             option.value = cpCode;
//             option.textContent = hostname;
//             hostnameDropdown.appendChild(option);
//         });

//         data.tags.forEach(tag => {
//             const option = document.createElement("option");
//             option.value = tag;
//             option.textContent = tag;
//             tagDropdown.appendChild(option);
//         });
//     });

//     selection.addEventListener("change", function () {
//         hostnameDropdownContainer.style.display =
//             selection.value === "hostname" ? "block" : "none";
//         tagDropdownContainer.style.display =
//             selection.value === "tag" ? "block" : "none";
        
//         inputField.style.display =
//             selection.value === "url" ? "block" : "none";
        
//         valuesList.innerHTML = "";
//         values.length = 0;
//     });

//     inputField.addEventListener("input", function () {
//         valuesList.innerHTML = "";
//         values = inputField.value.split("\n").filter(url => url.trim() !== "");
        
//         values.forEach(value => {
//             const listItem = document.createElement("li");
//             listItem.classList.add("list-group-item");
//             listItem.textContent = value;
//             valuesList.appendChild(listItem);
//         });
//     });

//     submitButton.addEventListener("click", function () {
//         let apiEndpoint;
//         let requestBody;

//         if (selection.value === "hostname") {
//             apiEndpoint = "/ccu/v3/invalidate/cpcode/";
//             requestBody = { objects: [parseInt(hostnameDropdown.value)] };
        
//         } else if (selection.value === "url") {
//             apiEndpoint = "/ccu/v3/invalidate/url/";
//             requestBody = { objects: values };
        
//         } else if (selection.value === "tag") {
//             apiEndpoint = "/ccu/v3/invalidate/tag/";
//             requestBody = { objects: [tagDropdown.value] };
        
//         } else {
//             alert("Please select a valid type.");
//             return;
//         }

//         fetch(apiEndpoint, {
//             method: "POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(requestBody)
//         })
//           .then(response => response.json())
//           .then(data => {
//               responseDiv.innerHTML =
//                   `<div class='alert alert-success'>${data.message}</div>`;
//           })
//           .catch(error => {
//               responseDiv.innerHTML =
//                   `<div class='alert alert-danger'>Error: ${error.message}</div>`;
//           });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const selection = document.getElementById("selection");
    const hostnameDropdownContainer = document.getElementById("hostname-dropdown-container");
    const hostnameDropdown = document.getElementById("hostname-dropdown");
    const tagDropdownContainer = document.getElementById("tag-dropdown-container");
    const tagDropdown = document.getElementById("tag-dropdown");
    const inputField = document.getElementById("input-field");
    const valuesList = document.getElementById("values-list");
    const submitButton = document.getElementById("submit-btn");
    const responseDiv = document.getElementById("response");

    // Populate hostname dropdown dynamically from backend data
    Object.entries(HOSTNAMES_WITH_CP_CODES).forEach(([hostname, cpCode]) => {
        const option = document.createElement("option");
        option.value = cpCode;
        option.textContent = hostname;
        hostnameDropdown.appendChild(option);
    });

    // Populate tags dropdown dynamically from backend data
    CACHE_TAGS.forEach(tag => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = tag;
        tagDropdown.appendChild(option);
    });

    selection.addEventListener("change", function () {
        hostnameDropdownContainer.style.display =
            selection.value === "hostname" ? "block" : "none";
        
        tagDropdownContainer.style.display =
            selection.value === "tag" ? "block" : "none";
        
        inputField.style.display =
            selection.value === "url" ? "block" : "none";
        
        valuesList.innerHTML = "";
        values.length = 0;
    });

    inputField.addEventListener("input", function () {
        valuesList.innerHTML = "";
        
        const values = inputField.value.split("\n").filter(url => url.trim() !== "");
        
        values.forEach(value => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = value;
            valuesList.appendChild(listItem);
        });
    });

    submitButton.addEventListener("click", function () {
        let apiEndpoint;
        let requestBody;

        if (selection.value === "hostname") {
            apiEndpoint = "/ccu/v3/invalidate/cpcode/";
            requestBody = { objects: [parseInt(hostnameDropdown.value)] };
        
        } else if (selection.value === "url") {
            apiEndpoint = "/ccu/v3/invalidate/url/";
            requestBody = { objects: inputField.value.split("\n").filter(url => url.trim() !== "") };
        
        } else if (selection.value === "tag") {
            apiEndpoint = "/ccu/v3/invalidate/tag/";
            requestBody = { objects: [tagDropdown.value] };
        
        } else {
            alert("Please select a valid type.");
            return;
        }

        fetch(apiEndpoint, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        })
          .then(response => response.json())
          .then(data => {
              if (data.message) {
                  responseDiv.innerHTML =
                      `<div class='alert alert-success'>${data.message}</div>`;
              } else if (data.error) {
                  responseDiv.innerHTML =
                      `<div class='alert alert-danger'>Error: ${data.error}</div>`;
              }
          })
          .catch(error => {
              responseDiv.innerHTML =
                  `<div class='alert alert-danger'>Error: ${error.message}</div>`;
          });
    });
});
