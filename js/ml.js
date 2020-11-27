        function addIConFolder (functionName) {
            var elements = document.querySelectorAll('.icon-set')
            for(var i = 0; i < elements.length; i++) {
                if (functionName === 'loadTrain'){
                    elements[i].innerHTML=`<p class="icon-container"><i class="fa fa-leanpub" style="font-size:18px;color:white"></i></p>`
                } else if (functionName === 'loadBatch') {
                    elements[i].innerHTML=`<p class="icon-container"><i class="fa fa-cloud" style="font-size:18px;color:white"></i></p>`
                } else if (functionName === 'loadEvaluate') {
                    elements[i].innerHTML=`<p class="icon-container"><i class="fa fa-cog" style="font-size:18px;color:white"></i></p>`
                }
            }
        }

        function loadTrain(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-leanpub"></span> Логи обучения`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-leanpub"></span> Матрица результатов обучения`;
            addIConFolder ('loadTrain')
            // document.getElementById('folderIcon',).innerHTML=`<p class="icon-container"><i class="fa fa-leanpub" style="font-size:18px;color:white"></i></p>`;
            BlockButton ()
            // 1. Создаём новый XMLHttpRequest-объект
            let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
            // 2. Настраиваем его: GET-запрос по URL /article/.../load
            // xhr.open("GET", "http://192.168.91.48:5000/train", true);
            xhr.open("GET", "/train", true);
            // 3. Отсылаем запрос
            xhr.send();
            // 4. Этот код сработает после того, как мы получим ответ сервера
            xhr.onload = function (){
                document.getElementById("alertIn").innerHTML = xhr.responseText;
                document.getElementById('alertHead').innerHTML="Обучение";
                document.getElementById('heading').innerHTML= "Обучение";
                document.getElementById("headPlus").innerHTML ="";
                    console.log('loadTrain start');
            }
            loadBlock()
        }

        function loadBatch(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-cloud"></span> Логи прогноза`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-cloud"></span> Матрица результатов прогноза`;
            addIConFolder ('loadBatch')
            BlockButton ()
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "http://192.168.91.48:5000/batch_inf", true);
            xhr.open("GET", "/batch_inf", true);
            xhr.send();
            xhr.onload = function () {
                document.getElementById("alertIn").innerHTML = xhr.responseText;
                document.getElementById('alertHead').innerHTML="Прогноз";
                document.getElementById('heading').innerHTML= "Прогноз";
                document.getElementById("headPlus").innerHTML ="";
                    console.log('loadBatch start');
            }
            loadBlock()
        }

        function loadEvaluate(){
            document.getElementById('logHeading').innerHTML=`<span class="fa fa-cog"></span> Логи оценки`;
            document.getElementById('tableHeading').innerHTML=`<span class="fa fa-cog"></span> Матрица результатов оценки`;
            addIConFolder ('loadEvaluate')
            BlockButton ()
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "http://192.168.91.48:5000/evaluate", true);
            xhr.open("GET", "/evaluate", true);
            xhr.send();
            xhr.onload = function (){
                document.getElementById("alertIn").innerHTML = xhr.responseText;
                document.getElementById('alertHead').innerHTML="Оценка";
                document.getElementById('heading').innerHTML= "Оценка";
                document.getElementById("headPlus").innerHTML ="";
                    console.log('loadEvaluate start');
            }
            loadBlock()
        }

        function loadLog(){
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "/log", true);
            // xhr.open("GET", "http://192.168.91.48:5000/part_log", true);
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
            // xhr.open("GET", "http://192.168.91.48:5000/matrix", true);
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
            // xhr.open("GET", "http://192.168.91.48:5000/accuracy", true);
            xhr.open("GET", "/accuracy", true);
            xhr.send();
            xhr.onload = function() {
                // let responseObjAccuracy = xhr.response
                let responseObjAccuracy = 0.894562222222222222222222222222222222222222222
                document.getElementById("accuracyNumber").innerHTML = responseObjAccuracy;
                    console.log('loadAccuracy start');
            }
        }

        function loadParams(){
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "http://192.168.91.48:5000/params", true);
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

        function loadBlock(nameHeader){
            let xhr = new XMLHttpRequest();
            // xhr.open("GET", "http://192.168.91.48:5000/block", true);
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
                        document.getElementById("alertIn").innerHTML = "Операция завершена";
                        document.getElementById("headPlus").innerHTML = `
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="margin-left:10px; color:MediumSeaGreen">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>`;
                    console.log(`Block else if - ${responseObjBlock}`);
                    setTimeout(() => 
                        console.log('END ALL')
                    , 200);

                } 
            }
        }

        function UnBlockButton (){
            document.getElementById('buttonLoadTrain').removeAttribute("disabled"),
            document.getElementById('buttonLoadEvaluate').removeAttribute("disabled"),
            document.getElementById('buttonLoadBatch').removeAttribute("disabled")
                $('.toast').toast('show')
            console.log('UnBlock Button');
        }

        function BlockButton (){
            document.getElementById('buttonLoadTrain').setAttribute("disabled", "true");
            document.getElementById('buttonLoadBatch').setAttribute("disabled", "true");
            document.getElementById('buttonLoadEvaluate').setAttribute("disabled", "true");
                $('.toast').toast('show')
            console.log('Block Button');
        }