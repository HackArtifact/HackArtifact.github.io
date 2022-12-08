<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filmer's Portfolio</title>
    <link rel="stylesheet" href="./MakeUp/Landing.css"/>
    <link rel="stylesheet" href="./MakeUp/Top.css"/>
    <link rel="stylesheet" href="./MakeUp/Bottom.css"/>
</head>
<script>
    $('input[type=checkbox]').change(function(){
    if($(this).prop('checked')){   
        $(this).parent().css('backgroundColor', '#bff0a1');
    }else{
        $(this).parent().css('backgroundColor', '#eee');        
    }
    });
</script>
<body>
        <?php include './Head-Foot/nav.php' ?>
        <!-- <img class="bg-stars" src="./MakeUp/Stars.svg" alt="Stars"> -->

        <!-- About Me -->
        <img class="business" src="./MakeUp/BusinessPhoto.jpg" alt="Picture of me">

        <?php include './Head-Foot/feet.php' ?>
</body>
</html>