// Done! (input type='date' -> return str) 1. learn how add date select (open calender feature) 
// Done! 2. Add function to "Add Expense Button" 
// CSS 3. set margin at bottom of table, change colour of cross in delete button 
// Done! 4. remove "No expense row"
// 5. if one field empty, small red text (highlight )


function addExpense(){ 
    let noExpenseMsgRow = document.getElementById('expense-items');
    let noExpenseMsg = document.getElementById('no-expense-msg');
    let addExpenseButton = document.getElementById('add-expense-button');
    let expenseTable = document.getElementById('expense-table');
    // declare input variables 
    let nameInput = document.getElementById('name-input');
    let dateInput = document.getElementById('date-input');
    let amountInput = document.getElementById('amount-input'); 

    // removing "No expense added yet!" messsage
    let observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if (mutation.type == 'childList'){
                if (expenseTable.getElementsByTagName("tr").length == 2){
                    // noExpenseMsgRow.style.display='block';
                    noExpenseMsg.style.display='block';
                    }
                else{
                    // noExpenseMsgRow.style.display='none';
                    noExpenseMsg.style.display='none';
                    };
                };
            });
            console.log(expenseTable.getElementsByTagName("tr").length);
        });
    let config = {attribute: true, childList: true, subtree: true};
    observer.observe(expenseTable, config);

    addExpenseButton.addEventListener('click', function(){
        // alerting user if any one fields is empty 
        if (nameInput.value == '' | dateInput.value == '' | amountInput.value == ''){
            alert('Please fill in all input fields!');
            return;
        }

        // converting date format from YYYY-MM-DD to MM-DD-YYYY
        let parts = dateInput.value.split('-');
        let formattedDate = `${parts[1]}-${parts[2]}-${parts[0]}`

        // insert new row at the last child (row)
        let row = expenseTable.insertRow(-1);
        // inserting cells and setting display(innerHTML) to inputted values
        let cell1 = row.insertCell(0);
        cell1.innerHTML = nameInput.value;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = formattedDate;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = `$${amountInput.value}`;

        // adding button and cross icon 
        let cell4 = row.insertCell(3);
        let delButton = document.createElement('button');
        delButton.innerHTML = '<i class="fa fa-times" style="color:black; opacity: 0.75;"></i>';
        delButton.classList.add('delete-button');
        cell4.appendChild(delButton);
        // clearing input fields
        nameInput.value = '';
        dateInput.value = ''; 
        amountInput.value = '';


        // function for delete button 
        delButton.addEventListener('click', function(){
            row.remove();
        });
    });
};

addExpense()