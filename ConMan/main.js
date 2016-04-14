/**
 * Created by inet2005 on 4/9/16.
 */
$(document).ready(function(){
    sessionStorage.removeItem('currentContactId');
    $('#add-contact').on('submit', function(e){
        e.preventDefault();
        var fName = $('#fName').val();
        var lName = $('#lName').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var twitter = $('#twitter').val();
        var facebook = $('#facebook').val();
        var linkedIn =$('#linkedIn').val();
        var reddit = $('#reddit').val();

        if(sessionStorage.getItem('currentContactId') != null) {
            var id = sessionStorage.getItem('currentContactId');
            var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts/'+id+'?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
            var type = 'PUT';
        }else{
            var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
            var type = 'POST';
        }

        $.ajax({
            url: url,
            data: JSON.stringify({
                "fName": fName,
                "lName": lName,
                "email": email,
                "phone": phone,
                "twitter": twitter,
                "facebook": facebook,
                "linkedIn": linkedIn,
                "reddit": reddit
            }),
            type: type,
            contentType: "application/json",
            success: function (data) {
                window.location.href="index.html";
            },
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    });

    $('body').on('click', '#edit', function(e){
        e.preventDefault();
        sessionStorage.setItem('currentContactId', $(this).data('id'));
        $('#fName').val($(this).data('first'));
        $('#lName').val($(this).data('last'));
        $('#email').val($(this).data('email'));
        $('#phone').val($(this).data('phone'));
        $('#twitter').val($(this).data('twitter'));
        $('#facebook').val($(this).data('facebook'));
        $('#linkedIn').val($(this).data('link'));
        $('#reddit').val($(this).data('reddit'));
    });

    $('body').on('click', '#delete', function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts/'+id+'?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
        var type = 'DELETE';

        $.ajax({
            url: url,
            type: type,
            async: true,
            timeout: 300000,
            success: function (data) {
                window.location.href="index.html";
            },
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    });
});

function getContacts(){
    $.ajax({
        url: 'https://api.mlab.com/api/1/databases/conman/collections/contacts?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp'
    }).done(function(data){
        var output = '<table class="table table-bordered" id="myTable">';
        output += '<thead>';
        output += '<tr>';
        output += '<th><img src="img/people.png" alt="people"></th>';
        output += '<th><img src="img/people.png" alt="people"></th>';
        output += '<th><img src="img/email.png" alt="email"></th>';
        output += '<th><img src="img/phone.png" alt="phone"></th>';
        output += '<th><img src="img/twit.png" alt="twit"></th>';
        output += '<th><img src="img/fb.png" alt="fb"></th>';
        output += '<th><img src="img/link.png" alt="link"></th>';
        output += '<th><img src="img/red.png" alt="red"></th>';
        output += '<th colspan="2">Options</th>';
        output += '</tr>';
        output += '</thead>';
        output += '<tbody>';
        $.each(data, function(key, data){
            output += '<tr>';
            output += '<td>'+data.fName+'</td>';
            output += '<td>'+data.lName+'</td>';
            output += '<td>'+data.email+'</td>';
            output += '<td>'+data.phone+'</td>';
            output += '<td><a href="'+data.twitter+ '" target="blank">'+data.twitter+'</a></td>';
            output += '<td><a href="'+data.facebook+ '" target="blank">'+data.facebook+'</a></td>';
            output += '<td><a href="'+data.linkedIn+ '" target="blank">'+data.linkedIn+'</a></td>';
            output += '<td><a href="'+data.reddit+ '" target="blank">'+data.reddit+'</a></td>';
            output += '<td><button class="btn-xs btn-primary" id="edit" data-id="'+data._id.$oid+'" data-first="'+data.fName+'" data-last="'+data.lName+'" data-email="'+data.email+'" data-phone="'+data.phone+'" data-twitter="'+data.twitter+'" data-facebook="'+data.facebook+'" data-link="'+data.linkedIn+'" data-reddit="'+data.reddit+'">Edit</button></td>';
            output += '<td><button class="btn-xs btn-danger" id="delete" data-id="'+data._id.$oid+'">Delete</button></td>';
            output += '</tr>';
        });
        output += '</table>';
        $('#contacts').html(output);
        $("#myTable").tablesorter();
    });
}

$('body').on('click','img',function(){
    $('#btns').toggle();
});

$('body').on('click', '#dark', function(){
    $('link[href="css/bs2.css"]').attr('href','css/bs1.css');
});

$('body').on('click', '#light', function(){
    $('link[href="css/bs1.css"]').attr('href','css/bs2.css');
});

$('table tbody').sortable();

$("#search").on("keyup", function() {
    var value = $(this).val();

    $("table tr").each(function(index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:first").text();

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});