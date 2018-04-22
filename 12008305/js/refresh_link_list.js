var refApp = angular.module('refApp', []);
refApp.controller('refCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.img = Math.floor(Math.random() * 32) + 1;
	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.data = [{
		id: 1,
		name: ["뉴 제네레이션즈의", "오프 타임"],
		idol: "しまむらうづき_しぶやりん_ほんだみお_シマムラウヅキ_シブヤリン_ホンダミオ_島村卯月_渋谷凛_本田未央_시마무라우즈키_시부야린_혼다미오"
	}, {
		id: 2,
		name: ["프릴드 스퀘어 대작전!"],
		idol: "ももいあずき_くどうしのぶ_あやせほのか_きたみゆず_モモイアズキ_クドウシノブ_アヤセホノカ_キタミユズ_桃井あずき_工藤忍_綾瀬穂乃香_喜多見柚_모모이아즈키_쿠도시노부_아야세호노카_키타미유즈"
	}, {
		id: 3,
		name: ["걸즈 파워의", "걸즈 토크"],
		idol: "つきみやみやび_きしべあやか_えとうみさき_ツキミヤミヤビ_キシベアヤカ_エトウミサキ_月宮雅_岸部彩華_衛藤美紗希_츠키미야미야비_키시베아야카_에토미사키"
	}, {
		id: 4,
		name: ["브리앙뜨 느와르의", "권유"],
		idol: "くろかわちあき_みずのみどり_クロカワチアキ_ミズノミドリ_黒川千秋_水野翠_쿠로카와치아키_미즈노미도리"
	}, {
		id: 5,
		name: ["다같이 공부하자♪"],
		idol: "よこやまちか_ささきちえ_いちはらにな_めありー・こくらん_ヨコヤマチカ_ササキチエ_イチハラニナ_メアリー・コクラン_横山千佳_佐々木千枝_市原仁奈_メアリー・コクラン_요코야마치카_사사키치에_이치하라니나_메어리코크란"
	},	{
		id: 6,
		name: ["섹시 갸루즈의", "갸루 토크★"],
		idol: "おおつきゆい_じょうがさきみか_ふじもとりな_オオツキユキ_ジョウガサキミカ_フジモトリナ_大槻唯_城ケ崎美嘉_藤本里奈_오오츠키유이_죠가사키미카_후지모토리나"
	}, {
		id: 7,
		name: ["와의 마음·", "하고로모코마치 옛이야기"],
		idol: "しおみしゅうこ_こばやかわさえ_シオミシュウコ_コバヤカワサエ_塩見周子_小早川紗枝_시오미슈코_코바야카와사에"
	}, {
		id: 8,
		name: ["강하다구!", "인디비쥬얼즈!"],
		idol: "ほししょうこ_もりくぼのの_はやさかみれい_ホシショウコ_モリクボノノ_ハヤサカミレイ_星輝子_森久保乃々_早坂美玲_호시쇼코_모리쿠보노노_하야사카미레이"
	}, {
		id: 9,
		name: ["즐겁고♪", "사이좋은 뉴 웨이브!"],
		idol: "つちやあこ_おおいしいずみ_むらまつさくら_ツチヤアコ_オオイシイズミ_ムラマツサクラ_土屋亜子_大石泉_村松さくら_츠치야아코_오오이시이즈미_무라마츠사쿠라"
	}, {
		id: 10,
		name: ["핫 아트 점핑의", "전력만끽 플랜"],
		idol: "あいのなぎさ_にしじまかい_よしおかさき_アイノナギサ_ニシジマカイ_ヨシオカサキ_愛野渚_西島櫂_吉岡沙紀_아이노나기사_니시지마카이_요시오카사키"
	}, {
		id: 11,
		name: ["플람 루쥬의", "최강 스페셜 오더"],
		idol: "まきはらしほ_きりのあや_こまついぶき_マキハラシホ_キリノアヤ_コマツイブキ_槙原志保_桐野アヤ_小松伊吹_마키하라시호_키리노아야_코마츠이부키"
	}, {
		id: 12,
		name: ["전국☆밥☆난무"],
		idol: "しゅとうあおい_はまぐちあやめ_わきやまたまみ_にわひとみ_シュトウアオイ_ハマグチアヤメ_ワキヤマタマミ_ニワヒトミ_首藤葵_浜口あやめ_脇山珠美_丹羽仁美_슈토아오이_하마구치아야메_와키야마타마미_니와히토미"
	}, {
		id: 13,
		name: ["로맨틱 투어즈의", "두근두근 정월계획"],
		idol: "なみきめいこ_いじゅういんめぐみ_えがみつばき_そうまなつみ_ナミキメイコ_イジュウインメグミ_エガミツバキ_ソウマナツミ_並木芽衣子_伊集院惠_江上椿_相馬夏美_나미키메이코_이쥬인메구미_에가미츠바키_소마나츠미"
	}, {
		id: 14,
		name: ["기운내서 가자!", "히트업☆치어스"],
		idol: "さいとうようこ_わかばやしともか_まなべいつき_サイトウヨウコ_ワカバヤシトモカ_マナベイツキ_斉藤洋子_若林智香_真鍋いつき_사이토요코_와카바야시토모카_마나베이츠키"
	}, {
		id: 15,
		name: ["나른한 초대…♪"],
		idol: "たかはしれいこ_ひいらぎしの_タカハシレイコ_ヒイラギシノ_高橋礼子_柊志乃_타카하시레이코_히이라기시노"
	}, {
		id: 16,
		name: ["멜로 옐로의", "○○수업?"],
		idol: "みずもとゆかり_しいなのりこ_なかのゆか_ミズモトユカリ_シイナノリコ_ナカノユカ_水本ゆかり_椎名法子_中野有香_미즈모토유카리_시이나노리코_나카노유카"
	}, {
		id: 17,
		name: ["카나미우 챌린지☆"],
		idol: "やぐちみう_いまいかな_ヤグチミウ_イマイカナ_矢口美羽_今井加奈_야구치미우_이마이카나"
	}, {
		id: 18,
		name: ["쉘·위·댄스♪", "with 솔·카마르"],
		idol: "なたーりあ_らいら_ナターリア_ライラ_ナターリア_ライラ_나탈리아_라이라"
	}, {
		id: 19,
		name: ["끝말잇기 게임♪"],
		idol: "あかぎみりあ_ふくやままい_ゆさこずえ_みよしさな_たちばなありす_アカギミリア_フクヤママイ_ユサコズエ_ミヨシサナ_タチバナアリス_赤城みりあ_福山舞_遊佐こずえ_三好紗南_橘ありす_아카기미리아_후쿠야마마이_유사코즈에_미요시사나_타치바나아리스"
	}, {
		id: 23,
		name: ["런치타임·V.V."],
		idol: "きりゅうつかさ_ざいぜんときこ_たかみねのあ_キリュウツカサ_ザイゼントキコ_タカミネノア_桐生つかさ_財前時子_高峯のあ_키류츠카사_자이젠토키코_타카미네노아"
	}, {
		id: 25,
		name: ["수험에 얽힌", "에세트라♪"],
		idol: "にったみなみ_さぎさわふみか_とときあいり_ニッタミナミ_サギサワフミカ_トトキアイリ_新田美波_鷺沢文香_十時愛梨_닛타미나미_사기사와후미카_토토키아이리"
	}, {
		id: 26,
		name: ["무지개색 드리머,", "취향을 말하다, 편☆"],
		idol: "あべなな_あらきひな_かみやなお_アベナナ_アラキヒナ_カミヤナオ_安部菜々_荒木比奈_神谷奈緒_아베나나_아라키히나_카미야나오"
	}, {
		id: 28,
		name: ["마음에 마음을 더해서,", "전하기…♪"],
		idol: "はっとりとうこ_わくいるみ_みふねみゆ_ハットリトウコ_ワクイルミ_ミフネミユ_服部瞳子_和久井留美_三船美優_핫토리토코_와쿠이루미_미후네미유"
	}, {
		id: 33,
		name: ["해피 에이프릴 풀☆"],
		idol: "りゅうざきかおる_もちだありさ_とうごうあい_リュウザキカオル_モチダアリサ_トウゴウアイ_龍崎薫_持田亜里沙_東郷あい_류자키카오루_모치다아리사_토고아이"
	}, {
		id: 36,
		name: ["인디고 벨의", "특훈, 빨리 말하기!"],
		idol: "たかもりあいこ_どうみょうじかりん_タカモリアイコ_ドウミョウジカリン_高森藍子_道明寺歌鈴_타카모리아이코_도묘지카린"
	}];
	$scope.q = '';

	$scope.getData = function() {
		// needed for the pagination calc
		// https://docs.angularjs.org/api/ng/filter/filter
		return $filter('filter')($scope.data, $scope.q)
	}

	$scope.numberOfPages = function() {
		return Math.ceil($scope.getData().length / $scope.pageSize);
	}

	$scope.setPage = function(n) {
		$scope.currentPage = n;
	}
}]);
//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
refApp.filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to int
		return input.slice(start);
	}
});
