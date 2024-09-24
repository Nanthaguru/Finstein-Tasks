$("#adduser").click(()=>{
    $(".inner").show()
    $("#submitBtn").prop("disabled",false)
})
$(".close").click(()=>$(".inner").hide())
// $('form').on('submit',function(e){
    // e.preventDefault();
    // console.log($(this).serializeJSON())
    // console.log($(this).serializeArray())
    // $('#submitBtn').prop("disabled",true)
// })
function loadUsers() {
    $.ajax({
        url: 'http://localhost:3000/users',
        type: 'GET',
        success: function(users) {
            var tbody = $('#userTable tbody');
            let si = 1;
            tbody.empty();
            users.forEach(function(user) {
                var tr = $('<tr>');
                tr.append($('<td>').text(si++))
                tr.append($('<td>').text(user.id));
                tr.append($('<td>').text(user.name));
                tr.append($('<td>').text(user.age));
                tr.append($('<td>').text(user.gender));
                tr.append($('<td>').text(user.hobbies));
                var editBtn = $('<button>').text('Edit').addClass('btn btn-primary btn-sm edit-btn').data('user', user);
                tr.append($('<td>').append(editBtn));
                var deleteBtn = $('<button>').text('Delete').addClass('btn btn-danger btn-sm delete-btn').data('user', user);
                tr.append($('<td>').append(deleteBtn));
                tbody.append(tr);
            });
        },
        error: function(error) {
            console.log('Error loading users:', error);
        }
    });
}

// Load users when the page loads
$(document).ready(function() {
    loadUsers();
});

$(document).on('click','.delete-btn', function(){
    console.log($(this).data('user').id)
    if(confirm("Are you sure want to delete this user ?"))
    {
        $.ajax({
            url: 'http://localhost:3000/deleteuser',
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({id:$(this).data('user').id}),
            success: function(response) {
                console.log('Success:', response.message);
                loadUsers();  // Reload the user table
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }
})

// Handle edit button click 
$(document).on('click', '.edit-btn', function() {
    $(".inner").show()
    var user = $(this).data('user');

    // Populate form with user data
    $('input[name="uname"]').val(user.name);
    $('input[name="age"]').val(user.age);

    $('input[name="gender"][value="' + user.gender_id + '"]').prop('checked', true);

    // Reset all checkboxes
    $('input[type="checkbox"]').prop('checked', false);

    // Check the appropriate hobby checkboxes
    // let hobbieId = user.hobbie_id.split(',').map(Number);
    // console.log(hobbieId)
    // hobbieId.forEach(function(hobby) {
    //     $('input[type="checkbox"][value="' + hobby + '"]').prop('checked', true);
    // });
    user.hobbie_id.forEach(function(hobby) {
        $('input[type="checkbox"][value="' + hobby + '"]').prop('checked', true);
    });
    // Show the form
    $(".inner").show();

    // Change submit button to update and store user ID
    $('#submitBtn').text('Update').data('userId', user.id);
});

// Handle form submission (create or update)
$('form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serializeArray();
    var userData = {
        name: '',
        age: 0,
        gender: 0,
        hobbies: []
    };

    formData.forEach(function(item) {
        if (item.name === 'uname') {
            userData.name = item.value;
        } else if (item.name === 'age') {
            userData.age = parseInt(item.value);
        } else if (item.name === 'gender') {
            userData.gender = parseInt(item.value);
        } else if (['cricket', 'carrom', 'chess', 'kabadi', 'batmitton', 'tabletennis'].includes(item.name)) {
            userData.hobbies.push(parseInt(item.value));
        }
    });
    var userId = $('#submitBtn').data('userId');
    // var url = userId ? 'http://localhost:3000/updateuser/:id' + userId : 'http://localhost:3000/adduser';
    var url = userId ? 'http://localhost:3000/updateuser/:id' : 'http://localhost:3000/adduser';
    var method = userId ? 'PUT' : 'POST';

    if(method==='PUT')
    {
        userData['id'] = userId;
        // console.log(userData.hobbies)
        $.ajax({
            url: url,
            type: method,
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                console.log('Success:', response.message);
                loadUsers();  // Reload the user table
                $(".inner").hide();  // Hide the form
                $('#submitBtn').text('Submit').removeData('userId');  // Reset the submit button
                $('form')[0].reset();  // Clear the form
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }
    else{
        $.ajax({
            url: url,
            type: method,
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                console.log('Success:', response.message);
                loadUsers();  // Reload the user table
                $(".inner").hide();  // Hide the form
                $('#submitBtn').text('Submit').removeData('userId');  // Reset the submit button
                $('form')[0].reset();  // Clear the form
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }
});

// Show form when "Add User" is clicked
$("#adduser").click(() => {
    $(".inner").show();
    $('form')[0].reset();  // Clear the form
    $('#submitBtn').text('Submit').removeData('userId');
});

// Hide form when close button is clicked
$(".close").click(() => {
    $(".inner").hide();
    $('form')[0].reset();  // Clear the form
    $('#submitBtn').text('Submit').removeData('userId');
});