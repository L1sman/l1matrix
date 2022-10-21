import  './svg.css';
function Description({ user }) {
    const date = new Date(user.birthDate)
    let birthDay = date.getDate()
	if (birthDay > 22) {
		birthDay = birthDay.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
    let birthMonth = date.getMonth() + 1
    let birthYear = date.getFullYear()
    let yearCell = birthYear.toString().split('').reduce((a, b) => a + parseInt(b), 0);
	if (yearCell > 22) {
		 yearCell = yearCell.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let soulLesson = birthDay + birthMonth + yearCell;
	if (soulLesson > 22) {
	 soulLesson = soulLesson.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let leftTopSquare = birthDay + birthMonth;
	if (leftTopSquare > 22) {
		leftTopSquare = leftTopSquare.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let leftBottSquare = birthDay + soulLesson;
	if (leftBottSquare > 22) {
		leftBottSquare = leftBottSquare.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let rightTopSquare = birthMonth + yearCell;
	if (rightTopSquare > 22) {
		rightTopSquare = rightTopSquare.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let rightBottSquare = soulLesson + yearCell;
	if (rightBottSquare > 22) {
		rightBottSquare = rightBottSquare.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let centerDown = rightBottSquare + rightTopSquare + leftBottSquare + leftTopSquare;
	if (centerDown > 22) {
		centerDown = centerDown.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let centerTop = birthDay + birthMonth + yearCell + soulLesson;
	if (centerTop > 22) {
		centerTop = centerTop.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let threeChakra = soulLesson + centerTop;
	if (threeChakra > 22) {
		threeChakra = threeChakra.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let secondChakra = threeChakra + soulLesson;
	if (secondChakra > 22) {
		secondChakra = secondChakra.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let fiveChakra = birthMonth + centerTop;
	if (fiveChakra > 22) {
		fiveChakra = fiveChakra.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let sixChakra = birthMonth + fiveChakra;
	if (sixChakra > 22) {
		sixChakra = sixChakra.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let fiveChakraH = birthDay + centerTop;
	if (fiveChakraH > 22) {
		fiveChakraH = fiveChakraH.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let sixChakraH = birthDay + fiveChakraH;
	if (sixChakraH > 22) {
		sixChakraH = sixChakraH.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let threeChakraH = yearCell + centerTop;
	if (threeChakraH > 22) {
		threeChakraH = threeChakraH.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let twoChakraH = yearCell + threeChakraH;
	if (twoChakraH > 22) {
		twoChakraH = twoChakraH.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let blueMid = sixChakraH + sixChakra;
	if (blueMid > 22) {
		blueMid = blueMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let purpleMid = centerDown + leftTopSquare;
	if (purpleMid > 22) {
		purpleMid = purpleMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let darkBlueMid = fiveChakraH + fiveChakra;
	if (darkBlueMid > 22) {
		darkBlueMid = darkBlueMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let yellowMid = threeChakra + threeChakraH;
	if (yellowMid > 22) {
		yellowMid = yellowMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let orangeMid = twoChakraH + secondChakra;
	if (orangeMid > 22) {
		orangeMid = orangeMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let redMid = centerDown + rightBottSquare
	if (redMid > 22) {
		redMid = redMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let squareRightBottomAngle = rightBottSquare + redMid;
	if (squareRightBottomAngle > 22) {
		squareRightBottomAngle = squareRightBottomAngle.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let squareLeftTopAngle = leftTopSquare + purpleMid;
	if (squareLeftTopAngle > 22) {
		squareLeftTopAngle = squareLeftTopAngle.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let purRedMid = centerDown + rightTopSquare;
	if (purRedMid > 22) {
		purRedMid = purRedMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let squareRightTopAngle = purRedMid + rightTopSquare
	if (squareRightTopAngle > 22) {
		squareRightTopAngle = squareRightTopAngle.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let purpRedDownMid = centerDown + leftBottSquare;
	if (purpRedDownMid > 22) {
		purpRedDownMid = purpRedDownMid.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let squareLeftBottomAngle = leftBottSquare + purpRedDownMid;
	if (squareLeftBottomAngle > 22) {
		squareLeftBottomAngle = squareLeftBottomAngle.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}
	let bg4 = birthMonth + rightTopSquare;
	if (bg4 > 22) {
		bg4 = bg4.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let bg2 = birthMonth + bg4;
	if (bg2 > 22) {
		bg2 = bg2.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let bg6 = bg4 + rightTopSquare;
	if (bg6 > 22) {
		bg6 = bg6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let gc1 = rightTopSquare + yearCell;
	if (gc1 > 22) {
		gc1 = gc1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let gc3 = rightTopSquare + gc1;
	if (gc3 > 22) {
		gc3 = gc3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let gc6 = yearCell + gc1;
	if (gc6 > 22) {
		gc6 = gc6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let cy1 = yearCell + rightBottSquare;
	if (cy1 > 22) {
		cy1 = cy1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let cy3 = yearCell + cy1;
	if (cy3 > 22) {
		cy3 = cy3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let cy6 = rightBottSquare + cy1;
	if (cy6 > 22) {
		cy6 = cy6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let yd1 = soulLesson + rightBottSquare;
	if (yd1 > 22) {
		yd1 = yd1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let yd3 = rightBottSquare + yd1;
	if (yd3 > 22) {
		yd3 = yd3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let yd6 = soulLesson + yd1;
	if (yd6 > 22) {
		yd6 = yd6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let dk1 = soulLesson + leftBottSquare;
	if (dk1 > 22) {
		dk1 = dk1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let dk3 = soulLesson + dk1;
	if (dk3 > 22) {
		dk3 = dk3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let dk6 = leftBottSquare + dk1;
	if (dk6 > 22) {
		dk6 = dk6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let ka1 = birthDay + leftBottSquare;
	if (ka1 > 22) {
		ka1 = ka1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let ka3 = leftBottSquare + ka1;
	if (ka3 > 22) {
		ka3 = ka3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let ka6 = birthDay + ka1;
	if (ka6 > 22) {
		ka6 = ka6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let af1 = birthDay + leftTopSquare;
	if (af1 > 22) {
		af1 = af1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let af3 = birthDay + af1;
	if (af3 > 22) {
		af3 = af3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let af6 = leftTopSquare + af1;
	if (af6 > 22) {
		af6 = af6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let fb1 = birthMonth + leftTopSquare;
	if (fb1 > 22) {
		fb1 = fb1.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let fb3 = leftTopSquare + fb1;
	if (fb3 > 22) {
		fb3 = fb3.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let fb6 = birthMonth + fb1;
	if (fb6 > 22) {
		fb6 = fb6.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let centerSum = centerDown + centerTop;
	if (centerSum > 22) {
		centerSum = centerSum.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let womanProg = rightTopSquare + leftBottSquare;
	if (womanProg > 22) {
		womanProg = womanProg.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	let manProg = leftTopSquare + rightBottSquare;
	if (manProg > 22) {
		manProg = manProg.toString().split('').reduce((a, b) => a + parseInt(b), 0)
	}

	return (
        <div className="description">
            <div className="descr__cover flex">
            <div className="descr__diagram">
                <svg className="descr__svg"  version="1.1" id="health-card_img" xmlns="http://www.w3.org/2000/svg"  x="0px"
                     y="0px" viewBox="0 0 722 747.3" >
                    <g id="Group_2">
	<g id="Group_1">
		<path id="Line_2"  className="st0" d="M221.4,513.4l280-282.3"/>
        <path id="Line_3"  className="st1" d="M500.9,512.8l-280-282.3"/>
        <g>
			<defs>
				<rect id="SVGID_1_" x="-7.1" y="-1.3" width="731" height="748"/>
			</defs>
            <clipPath id="SVGID_00000020378936166974968020000005814220879689869991_">

			</clipPath>
            <g>
				<g id="Diagram1_1">
					<g id="Group">
						<path id="Vector"  className="st3" d="M594.7,140.7l95.8,228l-95.8,233l-229.8,94.5l-234.4-94.5l-96.8-232l96.8-229l234.4-95.5
							L594.7,140.7z"/>
                        <line  className="st4" x1="381.2" y1="595.6" x2="585.3" y2="387.5"/>
                        <line  className="st5" x1="374.3" y1="556.9" x2="553.1" y2="384.9"/>
                        <line  className="st6" x1="135.7" y1="354.6" x2="344.5" y2="146.9"/>
                        <line  className="st7" x1="175.2" y1="359.3" x2="351.6" y2="185"/>
                        <path id="Vector_2"  className="st8" d="M563.1,371.2H162"/>
                        <path id="Vector_3_00000109011649977254286750000016212174731105362847_"  className="st9" d="M163.1,370.3"/>
                        <path id="Vector_3_00000023239166125378349840000010119886211655453317_"  className="st9" d="M360.5,568.4"/>
                        <path id="Vector_4"  className="st8" d="M362.5,569.6V171.7"/>
                        <path id="Vector_5"  className="st10" d="M561.9,568.4V172.8H163.1v395.5H561.9z"/>
                        <path id="Vector_6"  className="st10" d="M362.5,650.3l282-279.7l-282-279.7l-282,279.7L362.5,650.3z"/>
                        <path id="Vector_7"  className="st11" d="M627.9,371c-0.1,17.7,14.1,32.1,31.8,32.2c17.7,0.1,32.1-14.1,32.2-31.8
							s-14.1-32.1-31.8-32.2c-0.1,0-0.1,0-0.2,0C642.3,339.1,628,353.4,627.9,371z"/>
                        <path id="Vector_8"  className="st12" d="M541.1,162c-0.1,17.2,13.7,31.2,30.8,31.3c17.2,0.1,31.2-13.7,31.3-30.8
							s-13.7-31.2-30.8-31.3c-0.1,0-0.2,0-0.2,0C555.1,131.2,541.2,145,541.1,162z"/>
                        <path id="Vector_9"  className="st12" d="M541.1,580c-0.1,17.2,13.7,31.2,30.8,31.3s31.2-13.7,31.3-30.8s-13.7-31.2-30.8-31.3
							c-0.1,0-0.2,0-0.2,0C555.1,549.2,541.2,563,541.1,580z"/>
                        <path id="Vector_16_00000064352989115080072620000010078203339046221245_"  className="st13" d="M450.7,473.6
							c-0.1,6.9,5.5,12.5,12.4,12.6s12.5-5.5,12.6-12.4c0.1-6.9-5.5-12.5-12.4-12.6c0,0-0.1,0-0.1,0
							C456.3,461.2,450.7,466.8,450.7,473.6C450.7,473.6,450.7,473.6,450.7,473.6z"/>
                        <g id="p8">
							<text transform="matrix(1.0635 0 0 1 462.2631 477.5155)"  className="st14 st15 st16">
								{Number.isNaN(yellowMid) ? '' : yellowMid}
							</text>
						</g>
                        <path id="Vector_10_00000172405133142366193930000006267644557878468507_"  className="st17" d="M469.1,491.7
							c0,6.9,5.5,12.5,12.4,12.6c6.9,0,12.5-5.5,12.6-12.4s-5.5-12.5-12.4-12.6c0,0,0,0-0.1,0C474.7,479.2,469.1,484.8,469.1,491.7
							C469.1,491.7,469.1,491.7,469.1,491.7z"/>
                        <g id="p7">
							<text transform="matrix(1.0635 0 0 1 480.8615 495.8629)"  className="st18 st15 st16">
								{Number.isNaN(orangeMid) ? '' : orangeMid}
							</text>
						</g>
                        <path id="Vector_10"  className="st19" d="M332.5,371c-0.1,16.6,13.2,30.1,29.8,30.2c16.6,0.1,30.1-13.2,30.2-29.8
							c0.1-16.6-13.2-30.1-29.8-30.2c0,0-0.1,0-0.1,0C346,341.1,332.6,354.5,332.5,371C332.5,371,332.5,371,332.5,371z"/>
                        <path id="Vector_11"  className="st17" d="M578.5,370.6c-0.1,13.1,10.4,23.8,23.5,23.9s23.8-10.4,23.9-23.5
							c0.1-13.1-10.4-23.8-23.5-23.9c-0.1,0-0.1,0-0.2,0C589.2,347,578.6,357.6,578.5,370.6z"/>
                        <path id="Vector_12"  className="st12" d="M509.2,202.5c-0.1,12.6,10,22.9,22.6,23c12.6,0.1,22.9-10,23-22.6s-10-22.9-22.6-23
							c-0.1,0-0.1,0-0.2,0C519.5,179.8,509.3,189.9,509.2,202.5C509.2,202.5,509.2,202.5,509.2,202.5z"/>
                        <g id="s2">
							<text transform="matrix(1 0 0 1 529.2236 209.4964)"  className="st20 st15 st21">
								{Number.isNaN(squareRightTopAngle) ? '' : squareRightTopAngle}
							</text>
						</g>
                        <path id="Vector_13"  className="st12" d="M509.2,538.8c-0.1,12.6,10,22.9,22.6,23s22.9-10,23-22.6s-10-22.9-22.6-23
							c-0.1,0-0.2,0-0.2,0C519.5,516.2,509.3,526.3,509.2,538.8z"/>
                        <path id="Vector_14"  className="st13" d="M545.3,370.6c-0.1,9.2,7.3,16.7,16.5,16.8c9.2,0.1,16.7-7.3,16.8-16.5
							c0.1-9.2-7.3-16.7-16.5-16.8c0,0-0.1,0-0.1,0C552.8,354.1,545.3,361.5,545.3,370.6C545.3,370.6,545.3,370.6,545.3,370.6z"/>
                        <g id="b1">
							<text transform="matrix(1 0 0 1 561.8754 376.222)"  className="st15 st22">
								{Number.isNaN(threeChakraH) ? '' : threeChakraH}
							</text>
						</g>
                        <path id="Vector_15"  className="st12" d="M487.8,230.8c-0.1,8.7,6.9,15.7,15.6,15.8c8.7,0.1,15.7-6.9,15.8-15.6
							c0.1-8.7-6.9-15.7-15.6-15.8c0,0-0.1,0-0.1,0C494.9,215.2,487.9,222.1,487.8,230.8C487.8,230.7,487.8,230.8,487.8,230.8z"/>
                        <path id="Vector_16"  className="st11" d="M491,510.5c-0.1,6.9,5.5,12.5,12.4,12.6s12.5-5.5,12.6-12.4c0.1-6.9-5.5-12.5-12.4-12.6
							c0,0-0.1,0-0.1,0C496.6,498.1,491,503.6,491,510.5C491,510.5,491,510.5,491,510.5z"/>
                        <path id="Vector_18"  className="st13" d="M345.9,568.4c-0.1,9.2,7.3,16.7,16.5,16.8c9.2,0.1,16.7-7.3,16.8-16.5
							s-7.3-16.7-16.5-16.8c0,0-0.1,0-0.1,0C353.4,551.9,345.9,559.3,345.9,568.4z"/>
                        <g id="c1">
							<text transform="matrix(1 0 0 1 361.4089 574.7237)"  className="st15 st22">
								{Number.isNaN(threeChakra) ? '' : threeChakra}
							</text>
						</g>
                        <g id="p1">
							<text transform="matrix(1.0635 0 0 1 503 514.1986)"  className="st18 st15 st16">
								{Number.isNaN(redMid) ? '' : redMid}
							</text>
						</g>
                        <path id="Vector_22_00000054232495175933596480000013685202731406151813_"  className="st23" d="M249.8,272.4
							c-0.1,6.9,5.5,12.5,12.4,12.6c6.9,0.1,12.5-5.5,12.6-12.4c0.1-6.9-5.5-12.5-12.4-12.6c0,0-0.1,0-0.1,0
							C255.5,259.9,249.9,265.5,249.8,272.4C249.8,272.4,249.8,272.4,249.8,272.4z"/>
                        <g id="s1">
							<text transform="matrix(1 0 0 1 502.166 236.1195)"  className="st20 st15 st22">
								{Number.isNaN(purRedMid) ? '' : purRedMid}
							</text>
						</g>
                        <path id="Vector_22"  className="st23" d="M146.5,370.6c-0.1,9.2,7.3,16.7,16.5,16.8s16.7-7.3,16.8-16.5s-7.3-16.7-16.5-16.8
							c0,0-0.1,0-0.1,0C154,354.1,146.6,361.5,146.5,370.6C146.5,370.6,146.5,370.6,146.5,370.6z"/>
                        <path id="Vector_23"  className="st12" d="M205.9,510.7c-0.1,8.7,6.8,15.7,15.5,15.8c8.7,0.1,15.7-6.8,15.8-15.5
							c0.1-8.7-6.8-15.7-15.5-15.8c-0.1,0-0.1,0-0.2,0C212.9,495.2,205.9,502.1,205.9,510.7z"/>
                        <path id="Vector_24"  className="st24" d="M205.9,230.5c-0.1,8.7,6.9,15.7,15.5,15.8c8.7,0.1,15.7-6.9,15.8-15.5
							s-6.9-15.7-15.5-15.8c0,0-0.1,0-0.1,0C212.9,215,205.9,221.9,205.9,230.5C205.9,230.5,205.9,230.5,205.9,230.5z"/>
                        <path id="Vector_25"  className="st23" d="M346.3,172.7c-0.1,9.2,7.3,16.7,16.5,16.8s16.7-7.3,16.8-16.5
							c0.1-9.2-7.3-16.7-16.5-16.8c0,0-0.1,0-0.1,0C353.7,156.2,346.3,163.5,346.3,172.7z"/>
                        <path id="Vector_26"  className="st17" d="M339.7,608.4c-0.1,12.6,10,22.9,22.6,23c12.6,0.1,22.9-10,23-22.6s-10-22.9-22.6-23
							c-0.1,0-0.1,0-0.2,0C350,585.8,339.8,595.9,339.7,608.4C339.7,608.4,339.7,608.4,339.7,608.4z"/>
                        <path id="Vector_28"  className="st25" d="M100,370.6c-0.1,12.6,10,22.9,22.6,23c12.6,0.1,22.9-10,23-22.6
							c0.1-12.6-10-22.9-22.6-23c-0.1,0-0.1,0-0.2,0C110.3,348,100.1,358.1,100,370.6C100,370.6,100,370.6,100,370.6z"/>
                        <g id="d2">
							<text transform="matrix(1 0 0 1 123.9471 378.2224)"  className="st18 st15 st21">
								{Number.isNaN(sixChakraH) ? '' : sixChakraH}
							</text>
						</g>
                        <path id="Vector_29"  className="st12" d="M170.2,538.8c-0.1,12.6,10,22.9,22.6,23s22.9-10,23-22.6s-10-22.9-22.6-23
							c-0.1,0-0.2,0-0.2,0C180.5,516.2,170.3,526.3,170.2,538.8z"/>
                        <g id="s3">
							<text transform="matrix(1 0 0 1 192.0676 544.8788)"  className="st20 st15 st21">
								{Number.isNaN(squareLeftBottomAngle) ? '' : squareLeftBottomAngle}
							</text>
						</g>
                        <path id="Vector_30"  className="st12" d="M170.2,202.5c-0.1,12.6,10,22.9,22.6,23c12.6,0.1,22.9-10,23-22.6s-10-22.9-22.6-23
							c-0.1,0-0.1,0-0.2,0C180.5,179.8,170.3,189.9,170.2,202.5C170.2,202.5,170.2,202.5,170.2,202.5z"/>
                        <g id="p4">
							<text transform="matrix(1 0 0 1 192.5137 209.3529)"  className="st20 st15 st21">
								{Number.isNaN(squareLeftTopAngle) ? '' : squareLeftTopAngle}
							</text>
						</g>
                        <g id="p6">
							<text transform="matrix(0.9989 0 0 0.9989 262.6261 277.051)"  className="st18 st15 st26">
								{Number.isNaN(darkBlueMid) ? '' : darkBlueMid}
							</text>
						</g>
                        <path id="Vector_20_00000064320958338208376180000012745108754611446411_"  className="st25" d="M228.8,250.8
							c-0.1,6.9,5.5,12.5,12.4,12.6c6.9,0.1,12.5-5.5,12.6-12.4c0.1-6.9-5.5-12.5-12.4-12.6c0,0-0.1,0-0.1,0
							C234.4,238.4,228.8,243.9,228.8,250.8C228.8,250.8,228.8,250.8,228.8,250.8z"/>
						<g id="p5">
                        <text transform="matrix(0.9989 0 0 0.9989 241.7142 256.1623)"  className="st18 st15 st26">
							{Number.isNaN(blueMid) ? '' : blueMid}
						</text>
						</g>
                        <path id="Vector_31"  className="st25" d="M337.7,130.9c-0.1,13.1,10.4,23.8,23.5,23.9s23.8-10.4,23.9-23.5
							c0.1-13.1-10.4-23.8-23.5-23.9c-0.1,0-0.1,0-0.2,0C348.3,107.3,337.7,117.9,337.7,130.9C337.7,130.9,337.7,130.9,337.7,130.9z
							"/>
                        <g id="a2">
							<text transform="matrix(1 0 0 1 360.7139 138.6665)"  className="st27 st15 st21">
								{Number.isNaN(sixChakra) ? '' : sixChakra}
							</text>
						</g>
                        <g id="a1">
							<text transform="matrix(1 0 0 1 361.992 178.1273)"  className="st27 st15 st22">
								{ Number.isNaN(fiveChakra) ? '' : fiveChakra}
							</text>
						</g>
                        <path id="Vector_32"  className="st24" d="M33.1,371c-0.1,17.7,14.1,32.1,31.8,32.2c17.7,0.1,32.1-14.1,32.2-31.8
							c0.1-17.7-14.1-32.1-31.8-32.2c-0.1,0-0.1,0-0.2,0C47.5,339.2,33.2,353.4,33.1,371z"/>
                        <path id="Vector_33"  className="st12" d="M121.7,581c-0.1,17.2,13.7,31.2,30.8,31.4c17.2,0.1,31.2-13.7,31.4-30.8
							c0.1-17.2-13.7-31.2-30.8-31.4c-0.1,0-0.2,0-0.3,0C135.7,550.2,121.8,563.9,121.7,581z"/>
                        <path id="Vector_34"  className="st12" d="M121.7,161c-0.1,17.2,13.7,31.2,30.8,31.4c17.2,0.1,31.2-13.7,31.4-30.8
							c0.1-17.2-13.7-31.2-30.8-31.4c-0.1,0-0.2,0-0.3,0C135.7,130.2,121.8,143.9,121.7,161z"/>
                        <path id="Vector_35"  className="st11" d="M330.5,666c-0.1,17.7,14.1,32.1,31.8,32.2c17.7,0.1,32.1-14.1,32.2-31.8
							c0.1-17.7-14.1-32.1-31.8-32.2c-0.1,0-0.1,0-0.2,0C344.9,634.1,330.6,648.4,330.5,666z"/>
                        <path id="Vector_36"  className="st24" d="M330.5,75c-0.1,17.7,14.1,32.1,31.8,32.2c17.7,0.1,32.1-14.1,32.2-31.8
							s-14.1-32.1-31.8-32.2c-0.1,0-0.1,0-0.2,0C344.9,43.1,330.6,57.4,330.5,75C330.5,75,330.5,75,330.5,75z"/>
                        <g id="bb">
							<text transform="matrix(1 0 0 1 661.2619 379.8412)"  className="st27 st15 st28">
								{Number.isNaN(yearCell) ? '' : yearCell}
							</text>
						</g>
                        <g id="b2">
							<text transform="matrix(1 0 0 1 602.2506 378.4812)"  className="st27 st15 st21">
								{Number.isNaN(twoChakraH) ? '' : twoChakraH}
							</text>
						</g>
                        <g id="p2">
							<text transform="matrix(1 0 0 1 529.6923 545.2261)"  className="st20 st15 st21">
								{Number.isNaN(squareRightBottomAngle) ? '' : squareRightBottomAngle}
							</text>
						</g>
                        <g id="c2">
							<text transform="matrix(1 0 0 1 362.7346 616.605)" className="st18 st15 st21">
								{Number.isNaN(secondChakra) ? '' : secondChakra}
							</text>
						</g>
                        <g id="dd">
							<text transform="matrix(1 0 0 1 63.4802 379.8412)" className="st27 st15 st28">
								{Number.isNaN(birthDay) ? '' : birthDay}
							</text>
						</g>
                        <g id="cc">
							<text transform="matrix(1 0 0 1 362.0241 675.6107)" className="st27 st15 st28">
								{Number.isNaN(soulLesson) ? '' : soulLesson}
							</text>
						</g>
                        <g id="aa">
							<text transform="matrix(1 0 0 1 361.6488 83.2007)" className="st27 st15 st28">
								{Number.isNaN(birthMonth) ? '' : birthMonth}
							</text>
						</g>
                        <g id="ee">
							<text transform="matrix(1 0 0 1 361.5164 366.9548)" className="st27 st15 st28 fs20">
								{Number.isNaN(centerTop) ? '' : centerTop}
							</text>
							<text transform="matrix(1 0 0 1 361.5164 379.9548)" className="st27 st15 st28">⎯</text>
							<text transform="matrix(1 0 0 1 361.5164 390.9548)" className="st27 st15 st28 fs20">
								{Number.isNaN(centerDown) ? '' : centerDown}
							</text>
						</g>
                        <g id="ff">
							<text transform="matrix(1 0 0 1 571.7635 171.463)" className="st20 st15 st28">
								{Number.isNaN(rightTopSquare) ? '' : rightTopSquare}
							</text>
						</g>
                        <g id="kk">
							<text transform="matrix(1 0 0 1 152.4725 169.6568)" className="st20 st15 st28">
								{Number.isNaN(leftTopSquare) ? '' : leftTopSquare}
							</text>
						</g>
                        <g id="yy">
							<text transform="matrix(1 0 0 1 150.4908 590.4054)" className="st20 st15 st28">
								{Number.isNaN(leftBottSquare) ? '' : leftBottSquare}
							</text>
						</g>
                        <g id="gg">
							<text transform="matrix(1 0 0 1 571.9456 590.4761)" className="st20 st15 st28">
								{Number.isNaN(rightBottSquare) ? '' : rightBottSquare}
							</text>
						</g>
                        <g id="p3">
							<text transform="matrix(1 0 0 1 219.6642 236.1193)" className="st18 st15 st22">
								{Number.isNaN(purpleMid) ? '' : purpleMid}
							</text>
						</g>
                        <g id="s4">
							<text transform="matrix(1 0 0 1 220.9073 515.6661)" className="st20 st15 st22">
								{Number.isNaN(purpRedDownMid) ? '' : purpRedDownMid}
							</text>
						</g>
                        <g id="d1">
							<text transform="matrix(1 0 0 1 163.5842 376.222)" className="st27 st15 st22">
								{Number.isNaN(fiveChakraH) ? '' : fiveChakraH}
							</text>
						</g>
                        <g id="_20">
							<text transform="matrix(1 0 0 1 706.4726 368.5109)" className="st20 st15 st22">20</text>
						</g>
                        <g id="let">
							<text transform="matrix(1 0 0 1 696.0324 380.6515)" className="st20 st15 st29">лет</text>
						</g>
                        <text transform="matrix(1 0 0 1 609.2981 124.1942)" className="st20 st15 st22">10</text>
                        <g id="let_2">
							<text transform="matrix(1 0 0 1 600.2178 140.3251)" className="st20 st15 st29">лет</text>
						</g>
                        <g id="_0">
							<text transform="matrix(1 0 0 1 363.9347 20.2162)" className="st20 st15 st22">0</text>
						</g>
                        <g id="let_3">
							<text transform="matrix(1 0 0 1 352.735 36.3451)" className="st20 st15 st29">лет</text>
						</g>
                        <g id="let_4">
							<text transform="matrix(1 0 0 1 100.6774 146.857)" className="st20 st15 st29">лет</text>
						</g>
                        <g id="_70">
							<text transform="matrix(1 0 0 1 111.1476 130.7262)" className="st20 st15 st22">70</text>
						</g>
                        <g id="_60">
							<text transform="matrix(1 0 0 1 15.2952 368.157)" className="st20 st15 st22">60</text>
						</g>
                        <g id="let_5">
							<text transform="matrix(1 0 0 1 5.5053 384.2879)" className="st20 st15 st29">лет</text>
						</g>
                        <g id="_30">
							<text transform="matrix(1 0 0 1 618.2031 609.891)" className="st20 st15 st22">30</text>
						</g>
                        <g id="let_6">
							<text transform="matrix(1 0 0 1 607.4927 626.0219)" className="st20 st15 st29">лет</text>
						</g>
                        <g id="_40">
							<text transform="matrix(1 0 0 1 361.6279 717.7367)" className="st20 st15 st22">40</text>
						</g>
                        <g id="let_7">
							<text transform="matrix(1 0 0 1 352.0081 733.8656)" className="st20 st15 st29">лет</text>

						</g>
                        <g id="_50">
							<text transform="matrix(1 0 0 1 115.6771 613.6265)" className="st20 st15 st22">50</text>
						</g>
                        <g id="let_8">
							<text transform="matrix(1 0 0 1 105.1042 629.7574)" className="st20 st15 st29">лет</text>
						</g>
                        <path id="Vector_45" className="st20" d="M620.1,204.7c0.3,0.8,1.2,1.1,2,0.8c0.8-0.3,1.1-1.2,0.8-2c0,0,0,0,0,0
							c-0.3-0.8-1.2-1.1-2-0.8C620.1,203,619.7,203.9,620.1,204.7C620.1,204.7,620.1,204.7,620.1,204.7z"/>
                        <path id="Vector_46" className="st20" d="M660.8,435.9c-0.4,0.7,0,1.6,0.7,2c0,0,0,0,0,0c0.8,0.3,1.6,0,2-0.7c0.3-0.8,0-1.7-0.7-2
							C662,434.8,661.1,435.1,660.8,435.9z"/>
                        <path id="Vector_47" className="st20" d="M101.3,204.9c-0.4,0.7,0,1.6,0.7,2c0,0,0,0,0,0c0.8,0.3,1.6,0,2-0.7c0.4-0.7,0-1.6-0.7-2
							c0,0,0,0,0,0C102.5,203.8,101.6,204.1,101.3,204.9z"/>
                        <path id="Vector_48" className="st20" d="M528.8,627.1c-0.8,0.3-1.2,1.2-0.9,1.9c0,0,0,0,0,0.1c0.3,0.8,1.2,1.2,2,0.9c0,0,0,0,0,0
							c0.8-0.3,1.2-1.2,0.9-1.9c0,0,0,0,0,0C530.5,627.2,529.6,626.8,528.8,627.1C528.8,627.1,528.8,627.1,528.8,627.1z"/>
                        <path id="Vector_49" className="st20" d="M296.5,666.9c-0.7-0.3-1.6-0.1-2,0.7c-0.4,0.7-0.1,1.6,0.7,2c0.7,0.4,1.6,0.1,2-0.6
							C297.6,668.2,297.3,667.3,296.5,666.9L296.5,666.9L296.5,666.9z"/>
                        <path id="Vector_50" className="st20" d="M104.2,534c-0.2-0.8-1.1-1.2-1.9-1s-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1
							C104,535.6,104.4,534.8,104.2,534C104.2,534,104.2,534,104.2,534z"/>
                        <path id="Vector_57" className="st30" d="M639.1,250.6c0.4,1,1.6,1.5,2.6,1.1c0,0,0,0,0,0c1-0.4,1.5-1.6,1.1-2.6c0,0,0,0,0,0
							c-0.4-1-1.6-1.5-2.6-1.1c0,0,0,0,0,0C639.2,248.4,638.7,249.6,639.1,250.6C639.1,250.6,639.1,250.6,639.1,250.6z"/>
                        <path id="Vector_58" className="st30" d="M641.7,481.8c-0.5,1,0,2.2,1,2.7c0,0,0,0,0,0c1,0.5,2.2,0,2.7-1c0,0,0,0,0,0
							c0.5-1,0-2.2-1-2.6c0,0,0,0,0,0C643.4,480.4,642.2,480.8,641.7,481.8C641.7,481.8,641.7,481.8,641.7,481.8z"/>
                        <path id="Vector_59" className="st30" d="M82.2,250.8c-0.4,1,0,2.2,1,2.6c1,0.4,2.2,0,2.6-1c0.4-1,0-2.2-1-2.6
							C83.9,249.3,82.7,249.8,82.2,250.8C82.2,250.8,82.2,250.8,82.2,250.8z"/>
                        <path id="Vector_60" className="st30" d="M483,645.4c-1,0.4-1.5,1.6-1.1,2.6c0,0,0,0,0,0c0.4,1,1.6,1.5,2.6,1.1c0,0,0,0,0,0
							c1-0.4,1.5-1.6,1.1-2.6c0,0,0,0,0,0C485.3,645.5,484.1,645,483,645.4C483.1,645.4,483.1,645.4,483,645.4z"/>
                        <path id="Vector_61" className="st30" d="M249.7,647.1c-1-0.5-2.2-0.1-2.7,0.8c0,0,0,0,0,0c-0.5,1-0.1,2.2,0.9,2.7
							s2.2,0.1,2.7-0.9C251,648.8,250.6,647.6,249.7,647.1z"/>
                        <path id="Vector_62" className="st30" d="M85.3,487.1c-0.3-1.1-1.5-1.6-2.5-1.3c-1.1,0.3-1.6,1.5-1.3,2.5c0.3,1.1,1.5,1.6,2.5,1.3
							C85.1,489.2,85.7,488.1,85.3,487.1C85.3,487.1,85.3,487.1,85.3,487.1z"/>
                        <path id="Vector_69" className="st20" d="M657.3,293.7c0.3,0.8,1.2,1.1,2,0.8c0,0,0,0,0,0c0.8-0.3,1.1-1.2,0.8-2c0,0,0,0,0,0
							c-0.3-0.8-1.2-1.1-2-0.8c0,0,0,0,0,0C657.4,292,657,292.9,657.3,293.7C657.3,293.7,657.3,293.7,657.3,293.7z"/>
                        <path id="Vector_70" className="st20" d="M621.1,533.4c-0.4,0.7,0,1.6,0.7,2c0,0,0,0,0,0c0.8,0.3,1.6,0,2-0.7c0.4-0.7,0-1.6-0.7-2
							c0,0,0,0,0,0C622.3,532.3,621.4,532.6,621.1,533.4z"/>
                        <path id="Vector_71" className="st20" d="M61.6,302.4c-0.3,0.8,0,1.7,0.7,2s1.7,0,2-0.7c0.4-0.7,0-1.6-0.7-2c0,0,0,0,0,0
							C62.8,301.3,61.9,301.6,61.6,302.4z"/>
                        <path id="Vector_72" className="st20" d="M432.3,666.7c-0.8,0.3-1.2,1.2-0.9,1.9c0,0,0,0,0,0c0.3,0.8,1.2,1.2,2,0.9c0,0,0,0,0,0
							c0.8-0.3,1.1-1.2,0.8-1.9C434,666.8,433.2,666.4,432.3,666.7L432.3,666.7z"/>
                        <path id="Vector_73" className="st20" d="M196.7,626.9c-0.7-0.3-1.6-0.1-2,0.7c-0.4,0.7-0.1,1.6,0.7,2c0.7,0.4,1.6,0.1,2-0.6
							C197.8,628.2,197.5,627.3,196.7,626.9L196.7,626.9L196.7,626.9z"/>
                        <path id="Vector_74" className="st20" d="M62.6,435.5c-0.2-0.8-1.1-1.2-1.9-1c-0.8,0.2-1.2,1.1-1,1.9c0,0,0,0,0,0
							c0.2,0.8,1.1,1.2,1.9,1C62.4,437.1,62.9,436.3,62.6,435.5C62.6,435.5,62.6,435.5,62.6,435.5z"/>
                        <path id="Vector_80" className="st20" d="M523.7,112.6c-0.8-0.3-1.2-1.2-0.9-1.9c0,0,0,0,0-0.1c0.3-0.8,1.2-1.2,2-0.9c0,0,0,0,0,0
							c0.8,0.3,1.2,1.2,0.9,1.9c0,0,0,0,0,0C525.4,112.5,524.6,112.9,523.7,112.6C523.8,112.6,523.7,112.6,523.7,112.6z"/>
                        <path id="Vector_82" className="st30" d="M478,94.3c-1-0.4-1.5-1.6-1.1-2.6c0,0,0,0,0,0c0.4-1,1.6-1.5,2.6-1.1c0,0,0,0,0,0
							c1,0.4,1.5,1.6,1.1,2.6c0,0,0,0,0,0C480.2,94.2,479.1,94.7,478,94.3C478,94.3,478,94.3,478,94.3z"/>
                        <path id="Vector_84" className="st20" d="M427.3,73c-0.8-0.3-1.2-1.2-0.9-1.9c0,0,0,0,0,0c0.3-0.8,1.2-1.2,2-0.9c0,0,0,0,0,0
							c0.8,0.3,1.1,1.2,0.8,1.9C429,72.9,428.1,73.3,427.3,73L427.3,73z"/>
                        <path id="Vector_88" className="st20" d="M295.5,75.6c-0.7,0.4-1.6,0.1-2-0.7c-0.4-0.7-0.1-1.6,0.7-2c0.7-0.3,1.6-0.1,2,0.7
							C296.5,74.3,296.2,75.2,295.5,75.6z"/>
                        <path id="Vector_90" className="st30" d="M248.7,95.3c-1,0.5-2.2,0.1-2.7-0.8c0,0,0,0,0,0c-0.5-1-0.1-2.2,0.9-2.7
							c1-0.5,2.2-0.1,2.7,0.9C250,93.6,249.6,94.8,248.7,95.3z"/>
                        <path id="Vector_92" className="st20" d="M195.7,115.6c-0.7,0.4-1.6,0.1-2-0.7c-0.4-0.7-0.1-1.6,0.7-2c0.7-0.4,1.6-0.1,2,0.7
							C196.7,114.3,196.4,115.2,195.7,115.6z"/>
                        <g id="male">
							<text transform="matrix(0.7078 0.7064 -0.6963 0.7177 279.0801 272.6363)" className="st20 st15 st31">линия мужского рода </text>
						</g>
                        <g id="female">
							<text transform="matrix(0.7067 -0.7075 0.6974 0.7166 250.2357 478.9307)" className="st20 st15 st31">линия женского рода</text>
						</g>
                        <g>
                            <g id="_2_5-3_5">
								<text transform="matrix(1 0 0 1 409.26 88.2064)" className="st20 st15 st32">2,5 лет</text>
							</g>
                            <g id="_7_5-8_5">
								<text transform="matrix(1 0 0 1 506.5284 128.4338)" className="st20 st15 st32">7,5 лет</text>
							</g>
                            <g id="_12_5-13_5">
								<text transform="matrix(1 0 0 1 575.8592 208.9916)" className="st20 st15 st32">12,5 лет</text>
							</g>
                            <g id="_17_5-18_5">
								<text transform="matrix(1 0 0 1 610.1794 299.7026)" className="st20 st15 st32">17,5 лет</text>
							</g>
                            <g id="_22_5-23_5">
								<text transform="matrix(1 0 0 1 612.2997 440.1908)" className="st20 st15 st32">22,5 лет</text>
							</g>
                            <g id="_27_5-28_5">
								<text transform="matrix(1 0 0 1 575.9586 536.8605)" className="st20 st15 st32">27,5 лет</text>
							</g>
                            <g id="_32_5-33_5">
								<text transform="matrix(1 0 0 1 506.8464 615.9753)" className="st20 st15 st32">32,5 лет</text>
							</g>
                            <g id="_37_5-38_5">
								<text transform="matrix(1 0 0 1 410.7309 655.1022)" className="st20 st15 st32">37,5 лет</text>
							</g>
                            <g id="_42_5-43_5">
								<text transform="matrix(1 0 0 1 285.5078 658.9316)" className="st20 st15 st32">42,5 лет</text>
							</g>
                            <g id="_47_5-48_5">
								<text transform="matrix(1 0 0 1 185.3418 618.8358)" className="st20 st15 st32">47,5 лет</text>
							</g>
                            <g id="_52_5-53_5">
								<text transform="matrix(1 0 0 1 110.4618 538.9835)" className="st20 st15 st32">52,5 лет</text>
							</g>
                            <g id="_57_5-58_5">
								<text transform="matrix(1 0 0 1 68.3862 439.3633)" className="st20 st15 st32">57,5 лет</text>
							</g>
                            <g id="_62_5-63_5">
								<text transform="matrix(1 0 0 1 71.2794 309.2746)" className="st20 st15 st32">62,5 лет</text>
							</g>
                            <g id="_67_5-68_5">
								<text transform="matrix(1 0 0 1 109.5885 209.0375)" className="st20 st15 st32">67,5 лет</text>
							</g>
                            <g id="_72_5-73_5">
								<text transform="matrix(1 0 0 1 181.9519 134.2944)" className="st20 st15 st32">72,5 лет</text>
							</g>
                            <g id="_77_5-78_5">
								<text transform="matrix(1 0 0 1 280.8354 90.9515)" className="st20 st15 st32">77,5 лет</text>
							</g>
                            <g id="_5let">
								<text transform="matrix(1 0 0 1 460.4306 110.9469)" className="st20 st15 st33">5 лет</text>
							</g>
                            <g id="_15let">
								<text transform="matrix(1 0 0 1 590.5158 254.9856)" className="st20 st15 st33">15 лет</text>
							</g>
                            <g id="_25let">
								<text transform="matrix(1 0 0 1 590.9771 486.2454)" className="st20 st15 st33">25 лет</text>
							</g>
                            <g id="_35let">
								<text transform="matrix(1 0 0 1 460.5285 634.6434)" className="st20 st15 st33">35 лет</text>
							</g>
                            <g id="_45let">
								<text transform="matrix(1 0 0 1 239.3788 641.1467)" className="st20 st15 st33">45 лет</text>
							</g>
                            <g id="_55let">
								<text transform="matrix(1 0 0 1 89.6008 491.0914)" className="st20 st15 st33">55 лет</text>
							</g>
                            <g id="_65let">
								<text transform="matrix(1 0 0 1 89.588 258.8377)" className="st20 st15 st33">65 лет</text>
							</g>
                            <g id="_75let">
								<text transform="matrix(1 0 0 1 230.5381 117.7491)" className="st20 st15 st33">75 лет</text>

							</g>
						</g>
                        <g id="outNumbers">
                            <g id="fb6">
								<text transform="matrix(1 0 0 1 288.169 66.203)" className="st20 st15 st34">{Number.isNaN(fb6) ? '' : fb6}</text>
							</g>
                            <g id="bg4">
								<text transform="matrix(1 0 0 1 479.6798 80.8972)" className="st20 st15 st34">{Number.isNaN(bg4) ? '' : bg4}</text>
							</g>
                            <g id="fb1">
								<text transform="matrix(1 0 0 1 235.0549 86.3241)" className="st20 st15 st34">{Number.isNaN(fb1) ? '' : fb1}</text>
							</g>
                            <g id="bg6">
								<text transform="matrix(1 0 0 1 527.6583 102.9467)" className="st20 st15 st34">{Number.isNaN(bg6) ? '' : bg6}</text>
							</g>
                            <g id="fb3">
								<text transform="matrix(1 0 0 1 183.8395 107.7028)" className="st20 st15 st34">{Number.isNaN(fb3) ? '' : fb3}</text>
							</g>
                            <g id="gc3">
								<text transform="matrix(1 0 0 1 644.1206 207.8314)" className="st20 st15 st34">{Number.isNaN(gc3) ? '' : gc3}</text>
							</g>
                            <g id="af6">
								<text transform="matrix(1 0 0 1 82.7596 210.4964)" className="st20 st15 st34">{Number.isNaN(af6) ? '' : af6}</text>
							</g>
                            <g id="af1">
								<text transform="matrix(1 0 0 1 65.7303 256.8344)" className="st20 st15 st34">{Number.isNaN(af1) ? '' : af1}</text>
							</g>
                            <g id="gc1">
								<text transform="matrix(1 0 0 1 661.6836 252.6712)" className="st20 st15 st34">{Number.isNaN(gc1) ? '' : gc1}</text>
							</g>
                            <g id="gc6">
								<text transform="matrix(1 0 0 1 680.6837 297.0814)" className="st20 st15 st34">{Number.isNaN(gc6) ? '' : gc6}</text>
							</g>
                            <g id="af3">
								<text transform="matrix(1 0 0 1 43.7275 308.2855)" className="st20 st15 st34">{Number.isNaN(af3) ? '' : af3}</text>
							</g>
                            <g id="ka6">
								<text transform="matrix(1 0 0 1 38.1894 442.8646)" className="st20 st15 st34">{Number.isNaN(ka6) ? '' : ka6}</text>
							</g>
                            <g id="ka1">
								<text transform="matrix(1 0 0 1 60.2546 494.8557)" className="st20 st15 st34">{Number.isNaN(ka1) ? '' : ka1}</text>
							</g>
                            <g id="ka3">
								<text transform="matrix(1 0 0 1 77.6603 542.4554)" className="st20 st15 st34">{Number.isNaN(ka3) ? '' : ka3}</text>
							</g>
                            <g id="yd3">
								<text transform="matrix(1 0 0 1 530.8746 648.7766)" className="st20 st15 st34">{Number.isNaN(yd3) ? '' : yd3}</text>
							</g>
                            <g id="dk6">
								<text transform="matrix(1 0 0 1 195.5077 653.6443)" className="st20 st15 st34">{Number.isNaN(dk6) ? '' : dk6}</text>
							</g>
                            <g id="yd1">
								<text transform="matrix(1 0 0 1 484.4947 670.4916)" className="st20 st15 st34">{Number.isNaN(yd1) ? '' : yd1}</text>
							</g>
                            <g id="dk1">
								<text transform="matrix(1 0 0 1 248.6559 674.517)" className="st20 st15 st34">{Number.isNaN(dk1) ? '' : dk1}</text>
							</g>
                            <g id="yd6">
								<text transform="matrix(1 0 0 1 434.1124 690.6713)" className="st20 st15 st34">{Number.isNaN(yd6) ? '' : yd6}</text>
							</g>
                            <g id="cy3">
								<text transform="matrix(1 0 0 1 681.5703 441.5834)" className="st20 st15 st34">{Number.isNaN(cy3) ? '' : cy3}</text>
							</g>
                            <g id="cy1">
								<text transform="matrix(1 0 0 1 662.9144 488.1258)" className="st20 st15 st34">{Number.isNaN(cy1) ? '' : cy1}</text>
							</g>
                            <g id="cy6">
								<text transform="matrix(1 0 0 1 642.376 538.4974)" className="st20 st15 st34">{Number.isNaN(cy6) ? '' : cy6}</text>
							</g>
                            <g id="dk3">
								<text transform="matrix(1 0 0 1 293.8275 695.2963)" className="st20 st15 st34">{Number.isNaN(dk3) ? '' : dk3}</text>
							</g>
                            <g id="bg2">
								<text transform="matrix(1 0 0 1 428.1705 60.6994)" className="st20 st15 st34">{Number.isNaN(bg2) ? '' : bg2}</text>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>
</g>
</svg>
            </div>
		<div className="descr__box">
                 <div className="descr__data">
					 <div className="descr__userInfo">
						 <p>Имя: {user.name}</p>
						 <p>Дата рождения: {user.birthDate}</p>
						 <p>Возраст: {user.age}</p>
					 </div>
                    <p>Энергия дня рождения: {Number.isNaN(birthDay) ? '' : birthDay}</p>
					 <p>Энергия месяца рождения: {Number.isNaN(birthMonth) ? '' : birthMonth}</p>
					 <p>Энергия года рождения: {Number.isNaN(yearCell) ? '' : yearCell}</p>
					 <p>Урок души: {Number.isNaN(soulLesson) ? '' : soulLesson}</p>
					 <p>Личное предназначение: {Number.isNaN(centerTop) ? '' : centerTop}</p>
					 <p>Родовое предназначение: {Number.isNaN(centerDown) ? '' : centerDown}</p>
					 <p>Общее предназначение души: {Number.isNaN(centerSum) ? '' : centerSum}</p>
					 <p>Программа женского рода: {Number.isNaN(rightTopSquare) ? '' : rightTopSquare + ' - '} {Number.isNaN(leftBottSquare) ? '' : leftBottSquare + ' - '} {Number.isNaN(womanProg) ? '' : womanProg}</p>
					 <p>Программа мужского рода: {Number.isNaN(leftTopSquare) ? '' : leftTopSquare + ' - '} {Number.isNaN(rightBottSquare) ? '' : rightBottSquare + ' - '} {Number.isNaN(manProg) ? '' : manProg}</p>
                </div>
		</div>
            </div>
        </div>
    )
}

export default Description