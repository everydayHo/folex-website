$(function () {
	var $gallery = $('.portfolio_list'),
		$loadMoreBtn = $('#loadmore'),
		$addItemCount = 3,
		$added = 0,
		$allData = [];

	// $.getJSON('파일경로', function(data){....});

	$.getJSON('./data/portfolio.json', initGallery);
	function initGallery(data) {
		$allData = data; //jason파일의 목록을 배열로 저장
		addItems();
	}

	// 전체 배열에서 0~10 값을 추출
	//slicedData 변수애 저장
	//slicedData에서 제목을 리스트의 형식 html tag 생성,
	// ul의 내용 뒤 (append)에 추가
	//$added의 값을 추가한 개수로 업데이트
	function addItems() {
		var elements = [],
			slicedData = $allData.slice($added, $added + $addItemCount);
		//자바스크립트는 for in
		$.each(slicedData, function (i, item) {
			var itemHtml = `
      <li style="background-image: url(${item.imgUrl});" class="item ${item.type}">
          <h2 class="title_bar center">${item.title}</h2>
					<p>
						${item.desc}
					</p>
					<a href="${item.projectLink}" class="big btn orange" target="_blank">view project </a>
        </li>
      `;
			elements.push($(itemHtml).get(0));
			$gallery.append(elements);
		});
		$added += $addItemCount;

		if ($allData.length > $added) {
			$loadMoreBtn.show();
		} else {
			$loadMoreBtn.hide();
		}

		// portfolio filter
		var portfolioContainer = $('.portfolio_list');
		var mixer = mixitup(portfolioContainer, {
			selectors: {
				target: '.item',
			},
			animation: {
				duration: 300,
			},
		});
		mixer.forceRefresh();
	}

	// $loadMoreBtn.click(function () {
	// 	addItems();
	// });
	$loadMoreBtn.click(addItems);
});
