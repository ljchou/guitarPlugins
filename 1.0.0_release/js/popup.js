var HOLDER = new Map();
		HOLDER.set("6-0", "E");
        HOLDER.set("6-1", "F");
        HOLDER.set("6-2", "#F");
        HOLDER.set("6-3", "G");
        HOLDER.set("6-4", "#G");
        HOLDER.set("6-5", "A");
        HOLDER.set("6-6", "#A");
        HOLDER.set("6-7", "B");
        HOLDER.set("6-8", "C");
        HOLDER.set("6-9", "#C");
        HOLDER.set("6-10", "D");
        HOLDER.set("6-11", "#D");

        HOLDER.set("5-0", "A");
        HOLDER.set("5-1", "#A");
        HOLDER.set("5-2", "B");
        HOLDER.set("5-3", "C");
        HOLDER.set("5-4", "#C");
        HOLDER.set("5-5", "D");
        HOLDER.set("5-6", "#D");
        HOLDER.set("5-7", "E");
        HOLDER.set("5-8", "F");
        HOLDER.set("5-9", "#F");
        HOLDER.set("5-10", "G");
        HOLDER.set("5-11", "#G");

        HOLDER.set("4-0", "D");
        HOLDER.set("4-1", "#D");
        HOLDER.set("4-2", "E");
        HOLDER.set("4-3", "F");
        HOLDER.set("4-4", "#F");
        HOLDER.set("4-5", "G");
        HOLDER.set("4-6", "#G");
        HOLDER.set("4-7", "A");
        HOLDER.set("4-8", "#A");
        HOLDER.set("4-9", "B");
        HOLDER.set("4-10", "C");
        HOLDER.set("4-11", "#C");

        HOLDER.set("3-0", "G");
        HOLDER.set("3-1", "#G");
        HOLDER.set("3-2", "A");
        HOLDER.set("3-3", "#A");
        HOLDER.set("3-4", "B");
        HOLDER.set("3-5", "C");
        HOLDER.set("3-6", "#C");
        HOLDER.set("3-7", "D");
        HOLDER.set("3-8", "#D");
        HOLDER.set("3-9", "E");
        HOLDER.set("3-10", "F");
        HOLDER.set("3-11", "#F");

        HOLDER.set("2-0", "B");
        HOLDER.set("2-1", "C");
        HOLDER.set("2-2", "#C");
        HOLDER.set("2-3", "D");
        HOLDER.set("2-4", "#D");
        HOLDER.set("2-5", "E");
        HOLDER.set("2-6", "F");
        HOLDER.set("2-7", "#F");
        HOLDER.set("2-8", "G");
        HOLDER.set("2-9", "#G");
        HOLDER.set("2-10", "A");
        HOLDER.set("2-11", "#A");

        HOLDER.set("1-0", "E");
        HOLDER.set("1-1", "F");
        HOLDER.set("1-2", "#F");
        HOLDER.set("1-3", "G");
        HOLDER.set("1-4", "#G");
        HOLDER.set("1-5", "A");
        HOLDER.set("1-6", "#A");
        HOLDER.set("1-7", "B");
        HOLDER.set("1-8", "C");
        HOLDER.set("1-9", "#C");
        HOLDER.set("1-10", "D");
        HOLDER.set("1-11", "#D");

    var nexTestEL = document.getElementById("nexTest")
    if (nexTestEL) {
    	nexTestEL.addEventListener("click", displayTest)
    }

    var submitBtnEL = document.getElementById("submitBtn")
    if (submitBtnEL) {
    	submitBtnEL.addEventListener("click", check)
    }

    function displayTest() {
    	alert(1)
    	document.getElementById("submitBtn").style.visibility = "visible"

    	var array = Array.from(HOLDER.keys())
    	var key = array[Math.floor(Math.random() * HOLDER.size - 0)]
    	var format = formatTest(key)
    	var success = HOLDER.get(key)
    	var list = fetchList(success)

    	var listArray = Array.from(list)
    	var randomArray = randomList(listArray)

    	document.getElementById("test").innerHTML = "<div style=\"font-size: 20px\"><b>" + format + ": </b></div><br/>" +
    	"<input type = \"radio\" name=\"yinjie\" value=\""+randomArray[0]+"\"/>" + randomArray[0] + "<br/>" +
    	"<input type = \"radio\" name=\"yinjie\" value=\""+randomArray[1]+"\"/>" + randomArray[1] + "<br/>" +
    	"<input type = \"radio\" name=\"yinjie\" value=\""+randomArray[2]+"\"/>" + randomArray[2] + "<br/>" +
    	"<input type = \"radio\" name=\"yinjie\" value=\""+randomArray[3]+"\"/>" + randomArray[3] + "<br/> <h2 id=\"tag\" />" +
    	"<input type = \"hidden\" id=\"success\" /> <br/>"
    }

    function check() {
    	var radio = document.getElementsByName("yinjie")
    	var successValEL = document.getElementById("success")

    	var successVal = ""
    	if (successValEL) {
    		successVal = document.getElementById("success").value
    	}

    	for (var i=0; i<radio.length; i++) {
    		if (radio[i].checked) {
    			var value = radio[i]
    			if (value == successVal) {
    				document.getElementById("tag").innerHTML = "<font color=\"green\">回答正确！</font>"
    				setTimeout(() => {
    					displayTest()
    				}, 500)
    			} else {
    				document.getElementById("tag").innerHTML = "<font color=\"red\">回答错误！</font>"
    			}
    		}
    	}

    }

    function fetchList(successVal) {
    	var list = new Set()
    	list.add(successVal)

    	for (;;) {
    		var errorRet = errorRetTest()
    		if (errorRet = successVal) {
    			continue
    		}
    		list.add(errorRet)
    		if (list.size > 3) {
    			return list
    		}
    	}

    }

    function randomList(listArray) {
    	var length = listArray.length
    	var newArray = []
    	for (var i=0; i<length; i++) {
    		var index = Math.floor(Math.random() * (length - i))
    		newArray[i] = listArray[index]
    		listArray.splice(index, 1)
    	}
    	return newArray
    }

    function errorRetTest() {
    	var array = Array.from(HOLDER.values())
    	var value = array(Math.floor(Math.random() * HOLDER.size - 0))

    	return value
    }

	function formatTest(key) {
		var xian = key.split("-")[0]
		var pin = key.split("-")[1]
		if (1 == xian) {
			xian = "一"
		}
		if (2 == xian) {
			xian = "二"
		}

		if (3 == xian) {
			xian = "三"
		}

		if (4 == xian) {
			xian = "四"
		}

		if (5 == xian) {
			xian = "五"
		}

		if (6 == xian) {
			xian = "六"
		}

		var format = ""
		if (0 == pin) {
			format = xian + "弦空弦"
		} else {
			format = xian + "弦" + pin + "品"
		}

		return format
	}
