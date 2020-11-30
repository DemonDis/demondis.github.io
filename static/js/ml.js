
        function addIConFolder (functionName) {
            var elements = document.querySelectorAll('.icon-set')
            for(var i = 0; i < elements.length; i++) {
                if (functionName === 'loadTrain'){
                    elements[i].innerHTML=`<p class="icon-container" style="
                                                position: relative;
                                                width: 30px;
                                                height: 30px;
                                                background: rgb(35,39,43);
                                                background: linear-gradient(60deg, rgba(35,39,43,1) 0%, rgba(209,210,210,1) 89%, rgba(255,255,255,1) 100%); 
                                                border-radius: 50%;
                                                margin: auto;
                                            ">
                                            <i class="fa fa-leanpub"
                                                style="font-size:18px;
                                                color:white;
                                                position: absolute;
                                                transform: translate(-50%, -50%);
                                                top: 50%;
                                                left: 50%;
                                            "></i></p>`
                } else if (functionName === 'loadBatch') {
                    elements[i].innerHTML=`<p class="icon-container" style="
                                                position: relative;
                                                width: 30px;
                                                height: 30px;
                                                background: rgb(35,39,43);
                                                background: linear-gradient(60deg, rgba(35,39,43,1) 0%, rgba(209,210,210,1) 89%, rgba(255,255,255,1) 100%); 
                                                border-radius: 50%;
                                                margin: auto;
                                            ">
                                            <i class="fa fa-cloud"
                                                style="font-size:18px;
                                                color:white;
                                                position: absolute;
                                                transform: translate(-50%, -50%);
                                                top: 50%;
                                                left: 50%;
                                            "></i></p>`
                } else if (functionName === 'loadEvaluate') {
                    elements[i].innerHTML=`<p class="icon-container" style="
                                                position: relative;
                                                width: 30px;
                                                height: 30px;
                                                background: rgb(35,39,43);
                                                background: linear-gradient(60deg, rgba(35,39,43,1) 0%, rgba(209,210,210,1) 89%, rgba(255,255,255,1) 100%); 
                                                border-radius: 50%;
                                                margin: auto;
                                            ">
                                            <i class="fa fa-cog"
                                                style="font-size:18px;
                                                color:white;
                                                position: absolute;
                                                transform: translate(-50%, -50%);
                                                top: 50%;
                                                left: 50%;
                                            "></i></p>`
                }
            }
        }

        function loadTrain(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-leanpub"></span> Логи обучения`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-leanpub"></span> Матрица результатов обучения`;
            addIConFolder ('loadTrain')
            BlockButton ('loadTrain')
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/train", true);
            xhr.send();
            xhr.onload = function (){
                alertControl('#buttonLoadTrain')
                $("#alertIn").html(xhr.responseText);
                    console.log('loadTrain start');
            }
            loadBlock('#buttonLoadTrain')
        }

        function loadBatch(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-cloud"></span> Логи прогноза`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-cloud"></span> Матрица результатов прогноза`;
            addIConFolder ('loadBatch')
            BlockButton ('loadBatch')
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/batch_inf", true);
            xhr.send();
            xhr.onload = function () {
                alertControl('#buttonLoadBatch')
                $("#alertIn").html(xhr.responseText);
                    console.log('loadBatch start');
            }
            loadBlock('#buttonLoadBatch')
        }

        function loadEvaluate(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-cog"></span> Логи оценки`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-cog"></span> Матрица результатов оценки`;
            addIConFolder ('loadEvaluate')
            BlockButton ('loadEvaluate')
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/evaluate", true);
            xhr.send();
            xhr.onload = function (){
                alertControl('#buttonLoadEvaluate')
                $("#alertIn").html(xhr.responseText);
                    console.log('loadEvaluate start');
            }
            loadBlock('#buttonLoadEvaluate')
        }

        function loadLog(){
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "/log", true);
            xhr.open("GET", "/part_log", true);
            xhr.send();
            xhr.onload = function() {
                // let responseObj = xhr.response
                let responseObj =  
                    {   
                        0: 'Wed Sep 30 13:16:20 2020 : начало<br />', 
                        1: 'Wed Sep 30 13:16:20 2020 : init end mod<br />', 
                        2: 'Wed Sep 30 13:16:20 2020 : модель оценка<br />', 
                        3: 'Wed Sep 30 13:16:20 2020 : eval start<br />', 
                        4: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/models_n<br />', 
                        5: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/eval<br />', 
                        6: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/eval<br />', 
                        7: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/output<br />', 
                        8: 'Wed Sep 30 13:16:20 2020 : eval step1<br />', 
                        9: 'Wed Sep 30 13:16:20 2020 : eval step2<br />', 
                        10: 'Wed Sep 30 13:16:20 2020 : eval step3<br />', 
                        11: 'Wed Sep 30 13:16:20 2020 : read_all<br />',
                        12: 'Wed Sep 30 13:16:20 2020 : начало<br />', 
                        13: 'Wed Sep 30 13:16:20 2020 : init end mod<br />', 
                        14: 'Wed Sep 30 13:16:20 2020 : модель оценка<br />', 
                        15: 'Wed Sep 30 13:16:20 2020 : eval start<br />', 
                        16: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/models_n<br />', 
                        17: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/eval<br />', 
                        18: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/eval<br />', 
                        19: 'Wed Sep 30 13:16:20 2020 : /home/sav/nn/data/output<br />', 
                        20: 'Wed Sep 30 13:16:20 2020 : eval step1<br />', 
                        21: 'Wed Sep 30 13:16:20 2020 : eval step2<br />', 
                        22: 'Wed Sep 30 13:16:20 2020 : eval step3<br />', 
                        23: 'Wed Sep 30 13:16:20 2020 : read_all<br />',
                    }
                // $(".logInfo2").text((key)=>`${key} = ${responseObj[key]}`);
                document.getElementById("logInfo").innerHTML = JSON.stringify(responseObj);
                    console.log('loadLog start');
            }
        }

        function loadMatrix(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/matrix", true);
            xhr.send();
            xhr.responseType = 'json';
            xhr.onload = function() {
                // let responseObjMatrix = xhr.response
                responseObjMatrix =  [ 
                    [1, 2, 3, 4, 5], 
                    [6, 7, 8, 9, 10], 
                    [11, 12, 13, 14, 15],
                    [16, 17, 18, 19, 20],
                    [21, 22, 23, 24, 25]
                ]
                // responseObjMatrix =  [ 
                //     [1, 2, 3], 
                //     [6, 7, 8], 
                //     [11, 12, 13],
                // ]
                let tableMain=['<table class="table table-bordered table-striped shadow mb-1 bg-white rounded">']
                let theadArr=['<thead class="text-center">']
                let tbodyArr=['<tbody class="text-center">']
                tableMain.push(theadArr);
                tableMain.push('<tr><th scope="col">#</th>');
                    for (i = 0, n=1; i < responseObjMatrix[0].length, n < responseObjMatrix[0].length+1; i++, n++){
                        tableMain.push('<th scope="col">' + 'Класс ' + n + '</th>')
                    }
                tableMain.push('</tr')
                tableMain.push('</thead>')
                tableMain.push(tbodyArr)
                    for (i = 0, n=1; i < responseObjMatrix.length, n < responseObjMatrix.length+1; i++, n++) {
                        tableMain.push('<tr><th scope="row">' + 'Класс ' + n + '</th>')
                            for (j = 0; j < responseObjMatrix[i].length; j++){
                                tableMain.push('<td>' + responseObjMatrix[i][j] + '</td>')
                            }
                    tableMain.push('</tr>')
                    }
                tableMain.push('</tbody>')
                tableMain.push('</table>')
                document.getElementById('stat').innerHTML=tableMain.join('\n')
                    console.log('loadMatrix start');
            }
        }

        const sendHeartBeat = false;

        function loadAccuracy(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/accuracy", true);
            xhr.send();
            xhr.onload = function() {
                // let responseObjAccuracy = xhr.response
                let responseObjAccuracy = 0.89456222223
                document.getElementById("accuracyNumber").innerHTML = responseObjAccuracy;
                    console.log('loadAccuracy start');
            }
        }

        function loadParams(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/params", true);
            xhr.send();
            xhr.responseType = 'json';
            xhr.onload = function() {
                // let responseObjParams = xhr.response
                responseObjParams =  [ 
                    `<i class="fa fa-folder-open"></i>:/home/sav/nn/data/dbn`, 
                    `<i class="fa fa-folder-open"></i>:/home/sav/nn/data/models_n`, 
                    `<i class="fa fa-folder-open"></i>:/home/sav/nn/data/input`, 
                    `<i class="fa fa-folder-open"></i>:/home/sav/nn/data/output`, 
                    `<i class="fa fa-folder-open"></i>:/home/sav/nn/data/eval`
                ]
                document.getElementById("dbn").innerHTML = responseObjParams[0];
                document.getElementById("models_n").innerHTML = responseObjParams[1];
                document.getElementById("input").innerHTML = responseObjParams[2];
                document.getElementById("output").innerHTML = responseObjParams[3];
                document.getElementById("eval").innerHTML = responseObjParams[4];
                    console.log('loadParams start');
            }
        }

        function loadBlock(nameFunction){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/block", true);
            xhr.send();
            xhr.responseType = 'json';
            xhr.onload = function() {
                let responseObjBlock = xhr.response
                // let responseObjBlock = true
                    console.log(`loadBlock - ${xhr.response}`);
                    console.log(`responseBlock - ${responseObjBlock}`);
                if (responseObjBlock == true) {
                    setTimeout(() => 
                        loadLog(),
                        loadAccuracy(),
                        loadMatrix(),
                        loadParams()
                    , 100);
                    setTimeout(() => 
                        loadBlock()
                    , 2000);
                    console.log('----------------------------------------')
                    console.log(`Next response BLOCK- ${responseObjBlock}`);
                } else {
                    setTimeout(() => 
                        loadLog(),
                        loadAccuracy(),
                        loadMatrix(),
                        loadParams()
                    , 100);
                    UnBlockButton()
                        document.getElementById('alertSuccess').setAttribute("style", "display:flex;");
                        $("#alertSuccess").show();
                        $("#alertInSuccess").html('Операция завершена');
                    console.log(`Block else if - ${responseObjBlock}`);
                    setTimeout(() => 
                        console.log('END ALL')
                    , 200);

                } 
            }
        }

        function UnBlockButton (){
            alertControl();
            document.getElementById('buttonLoadBatch').setAttribute("")
            document.getElementById('buttonLoadEvaluate').setAttribute("")
            document.getElementById('buttonLoadTrain').setAttribute("")
            console.log('UnBlock Button');
        }

        function BlockButton (nameFunction){ 
            if (nameFunction === 'loadTrain') {
                alertControl()
                $("#alertIn").html('');
                document.getElementById('buttonLoadBatch').setAttribute("style", "display:none;");
                document.getElementById('buttonLoadEvaluate').setAttribute("style", "display:none;");
            } else if (nameFunction === 'loadBatch') {
                alertControl()
                document.getElementById('buttonLoadTrain').setAttribute("style", "display:none;");
                document.getElementById('buttonLoadEvaluate').setAttribute("style", "display:none;");
            } else if (nameFunction === 'loadEvaluate') {
                alertControl()
                document.getElementById('buttonLoadBatch').setAttribute("style", "display:none;");
                document.getElementById('buttonLoadTrain').setAttribute("style", "display:none;");
            }
            console.log('Block Button');
        }

        function alertControl(nameButton) {
            console.log('Alert active', nameButton)
            $(nameButton).on('click', function() {
                document.getElementById('selectedAssets').setAttribute("style", "display:flex;");
                $("#selectedAssets").show();
                setTimeout(() => 
                    $("#selectedAssets").hide() 
                , 4000);
            });
        }

        $('#closeAlert').on('click', function() {
            $("#selectedAssets").hide();  
        });
        $('#closeAlerSuccesst').on('click', function() {
            $("#alertSuccess").hide();  
        });