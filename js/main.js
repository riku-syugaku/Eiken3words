
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');

const quizSet = [
  {q:`accident`,c:`事故`},
  {q:`activity`,c:`活動`},
  {q:`actor`,c:`俳優`},
  {q:`actress`,c:`女優`},
  {q:`address`,c:`住所`},
  {q:`adventure`,c:`冒険`},
  {q:`age`,c:`年齢`},
  {q:`air`,c:`空気`},
  {q:`alarm`,c:`警報`},
  {q:`aquarium`,c:`水族館`},
  {q:`area`,c:`範囲`},
  {q:`athlete`,c:`スポーツ選手`},
  {q:`baker`,c:`パンを焼く人`},
  {q:`bakery`,c:`パン屋`},
  {q:`barbecue`,c:`バーベキュー`},
  {q:`barber`,c:`床屋`},
  {q:`beginner`,c:`初心者`},
  {q:`block`,c:`区間`},
  {q:`bottle`,c:`ボトル`},
  {q:`bottom`,c:`底`},
  {q:`capital`,c:`首都`},
  {q:`captain`,c:`キャプテン`},
  {q:`care`,c:`世話、注意`},
  {q:`ceiling`,c:`天井`},
  {q:`celebration`,c:`お祝い`},
  {q:`cell phone`,c:`携帯電話`},
  {q:`center`,c:`中央`},
  {q:`century`,c:`世紀`},
  {q:`ceremony`,c:`式`},
  {q:`chance`,c:`機会`},
  {q:`child`,c:`子ども`},
  {q:`Chinese`,c:`中国人`},
  {q:`circle`,c:`円`},
  {q:`cloth`,c:`布`},
  {q:`coach`,c:`コーチ`},
  {q:`college`,c:`大学`},
  {q:`comedy`,c:`コメディ`},
  {q:`continent`,c:`大陸`},
  {q:`couple`,c:`カップル`},
  {q:`course`,c:`コース`},
  {q:`court`,c:`裁判所`},
  {q:`culture`,c:`文化`},
  {q:`custom`,c:`慣習`},
  {q:`customer`,c:`客`},
  {q:`decoration`,c:`飾り`},
  {q:`dentist`,c:`歯科医`},
  {q:`description`,c:`説明`},
  {q:`difference`,c:`違い`},
  {q:`dining`,c:`食事`},
  {q:`director`,c:`ディレクター`},
  {q:`discount`,c:`割引`},
  {q:`doughnut`,c:`ドーナツ`},
  {q:`dream`,c:`夢`},
  {q:`dress`,c:`ドレス`},
  {q:`drugstore`,c:`薬局`},
  {q:`elevator`,c:`エレベーター`},
  {q:`end`,c:`終わり`},
  {q:`entrance`,c:`入り口`},
  {q:`environment`,c:`環境`},
  {q:`example`,c:`例`},
  {q:`experience`,c:`経験`},
  {q:`fact`,c:`事実`},
  {q:`fan`,c:`ファン`},
  {q:`fence`,c:`フェンス`},
  {q:`figure`,c:`図`},
  {q:`fire`,c:`火`},
  {q:`forest`,c:`森林`},
  {q:`future`,c:`未来`},
  {q:`garage`,c:`ガレージ`},
  {q:`garbage`,c:`ごみ`},
  {q:`gate`,c:`門`},
  {q:`German`,c:`ドイツ人`},
  {q:`gift`,c:`贈り物`},
  {q:`goal`,c:`ゴール`},
  {q:`goldfish`,c:`金魚`},
  {q:`grade`,c:`成績、学年`},
  {q:`habit`,c:`習慣`},
  {q:`headache`,c:`頭痛`},
  {q:`health`,c:`健康`},
  {q:`height`,c:`高さ`},
  {q:`hill`,c:`丘`},
  {q:`homestay`,c:`ホームステイ`},
  {q:`hometown`,c:`出身地`},
  {q:`hurricane`,c:`ハリケーン`},
  {q:`ice cream`,c:`アイスクリーム`},
  {q:`information`,c:`情報`},
  {q:`Internet`,c:`インターネット`},
  {q:`jeans`,c:`ジーンズ`},
  {q:`key`,c:`鍵`},
  {q:`kid`,c:`子供`},
  {q:`land`,c:`土地`},
  {q:`language`,c:`言語`},
  {q:`law`,c:`法律`},
  {q:`librarian`,c:`司書`},
  {q:`life`,c:`生活`},
  {q:`limit`,c:`限界`},
  {q:`line`,c:`線、列`},
  {q:`living room`,c:`リビングルーム`},
  {q:`locker`,c:`ロッカー`},
  {q:`maneger`,c:`支配人`},
  {q:`mayor`,c:`市長`},
  {q:`meal`,c:`食事`},
  {q:`meaning`,c:`意味`},
  {q:`medal`,c:`メダル`},
  {q:`memory`,c:`記憶、思い出`},
  {q:`message`,c:`メッセージ`},
  {q:`million`,c:`百万`},
  {q:`mistake`,c:`間違い、誤り`},
  {q:`model`,c:`モデル`},
  {q:`museum`,c:`博物館`},
  {q:`necklace`,c:`ネックレス`},
  {q:`nurse`,c:`看護師`},
  {q:`Olympic`,c:`オリンピック`},
  {q:`package`,c:`パッケージ`},
  {q:`painting`,c:`絵`},
  {q:`pancake`,c:`パンケーキ`},
  {q:`parade`,c:`パレード`},
  {q:`photo`,c:`写真`},
  {q:`plan`,c:`予定`},
  {q:`planet`,c:`惑星`},
  {q:`point`,c:`ポイント`},
  {q:`pollution`,c:`汚染`},
  {q:`price`,c:`価格`},
  {q:`prize`,c:`賞`},
  {q:`problem`,c:`問題`},
  {q:`project`,c:`計画、事業`},
  {q:`promise`,c:`約束`},
  {q:`queen`,c:`女王`},
  {q:`race`,c:`競争`},
  {q:`reason`,c:`理由`},
  {q:`recipe`,c:`レシピ`},
  {q:`reporter`,c:`リポーター`},
  {q:`rest`,c:`休息`},
  {q:`rule`,c:`ルール`},
  {q:`sale`,c:`セール`},
  {q:`scarf`,c:`スカーフ`},
  {q:`schedule`,c:`予定`},
  {q:`schoolwork`,c:`学校の勉強`},
  {q:`science fiction`,c:`SF`},
  {q:`secret`,c:`秘密`},
  {q:`section`,c:`部門`},
  {q:`sentence`,c:`文`},
  {q:`side`,c:`側`},
  {q:`sight`,c:`視力、視覚`},
  {q:`sign`,c:`看板、掲示`},
  {q:`sir`,c:`お客様、先生`},
  {q:`size`,c:`サイズ`},
  {q:`slice`,c:`１切れ`},
  {q:`snack`,c:`スナック`},
  {q:`space`,c:`空間、宇宙`},
  {q:`stadium`,c:`スタジアム`},
  {q:`stamp`,c:`切手`},
  {q:`star`,c:`星`},
  {q:`stew`,c:`シチュー`},
  {q:`storm`,c:`嵐`},
  {q:`sweater`,c:`セーター`},
  {q:`system`,c:`システム`},
  {q:`tool`,c:`道具`},
  {q:`top`,c:`上`},
  {q:`tour`,c:`旅行`},
  {q:`tourist`,c:`旅人`},
  {q:`tournament`,c:`トーナメント`},
  {q:`trick`,c:`騙す`},
  {q:`type`,c:`型`},
  {q:`uniform`,c:`ユニフォーム、制服`},
  {q:`video`,c:`ビデオ`},
  {q:`view`,c:`ながめ`},
  {q:`village`,c:`村`},
  {q:`volunteer`,c:`ボランティア`},
  {q:`wallet`,c:`財布`},
  {q:`wedding`,c:`結婚式`},
  {q:`wood`,c:`木材`},

]
const WrongAns = [
  `事故`,
  `活動`,
  `俳優`,
  `女優`,
  `住所`,
  `冒険`,
  `年齢`,
  `空気`,
  `警報`,
  `水族館`,
  `範囲`,
  `スポーツ選手`,
  `パンを焼く人`,
  `パン屋`,
  `バーベキュー`,
  `床屋`,
  `初心者`,
  `区間`,
  `ボトル`,
  `底`,
  `首都`,
  `キャプテン`,
  `世話、注意`,
  `天井`,
  `お祝い`,
  `携帯電話`,
  `中央`,
  `世紀`,
  `式`,
  `機会`,
  `子ども`,
  `中国人`,
  `円`,
  `布`,
  `コーチ`,
  `大学`,
  `コメディ`,
  `大陸`,
  `カップル`,
  `コース`,
  `裁判所`,
  `文化`,
  `慣習`,
  `客`,
  `飾り`,
  `歯科医`,
  `説明`,
  `違い`,
  `食事`,
  `ディレクター`,
  `割引`,
  `ドーナツ`,
  `夢`,
  `ドレス`,
  `薬局`,
  `エレベーター`,
  `終わり`,
  `入り口`,
  `環境`,
  `例`,
  `経験`,
  `事実`,
  `ファン`,
  `フェンス`,
  `図`,
  `火`,
  `森林`,
  `未来`,
  `ガレージ`,
  `ごみ`,
  `門`,
  `ドイツ人`,
  `贈り物`,
  `ゴール`,
  `金魚`,
  `成績、学年`,
  `習慣`,
  `頭痛`,
  `健康`,
  `高さ`,
  `丘`,
  `ホームステイ`,
  `出身地`,
  `ハリケーン`,
  `アイスクリーム`,
  `情報`,
  `インターネット`,
  `ジーンズ`,
  `鍵`,
  `子供`,
  `土地`,
  `言語`,
  `法律`,
  `司書`,
  `生活`,
  `限界`,
  `線、列`,
  `リビングルーム`,
  `ロッカー`,
  `支配人`,
  `市長`,
  `食事`,
  `意味`,
  `メダル`,
  `記憶、思い出`,
  `メッセージ`,
  `百万`,
  `間違い、誤り`,
  `モデル`,
  `博物館`,
  `ネックレス`,
  `看護師`,
  `オリンピック`,
  `パッケージ`,
  `絵`,
  `パンケーキ`,
  `パレード`,
  `写真`,
  `予定`,
  `惑星`,
  `ポイント`,
  `汚染`,
  `価格`,
  `賞`,
  `問題`,
  `計画、事業`,
  `約束`,
  `女王`,
  `競争`,
  `理由`,
  `レシピ`,
  `リポーター`,
  `休息`,
  `ルール`,
  `セール`,
  `スカーフ`,
  `予定`,
  `学校の勉強`,
  `SF`,
  `秘密`,
  `部門`,
  `文`,
  `側`,
  `視力、視覚`,
  `看板、掲示`,
  `お客様、先生`,
  `サイズ`,
  `１切れ`,
  `スナック`,
  `空間、宇宙`,
  `スタジアム`,
  `切手`,
  `星`,
  `シチュー`,
  `嵐`,
  `セーター`,
  `システム`,
  `道具`,
  `上`,
  `旅行`,
  `旅人`,
  `トーナメント`,
  `騙す`,
  `型`,
  `ユニフォーム、制服`,
  `ビデオ`,
  `ながめ`,
  `村`,
  `ボランティア`,
  `財布`,
  `結婚式`,
  `木材`,

]
const QuizVerb = [
  {q:`agree`,c:`賛成する`},
  {q:`ask`,c:`頼む`},
  {q:`attack`,c:`攻撃`},
  {q:`believe`,c:`信じる`},
  {q:`borrow`,c:`借りる`},
  {q:`break`,c:`破る、壊す`},
  {q:`bring`,c:`持って来る`},
  {q:`brush`,c:`みがく`},
  {q:`build`,c:`建てる`},
  {q:`call`,c:`呼ぶ`},
  {q:`carry`,c:`運ぶ`},
  {q:`catch`,c:`捕る`},
  {q:`celebrate`,c:`祝う`},
  {q:`clean`,c:`掃除する`},
  {q:`click`,c:`クリックする`},
  {q:`collect`,c:`集める`},
  {q:`contact`,c:`連絡を取る`},
  {q:`continue`,c:`継続する`},
  {q:`cover`,c:`おおう`},
  {q:`cross`,c:`交わる`},
  {q:`cry`,c:`泣く`},
  {q:`decide`,c:`決める`},
  {q:`deliver`,c:`届ける`},
  {q:`destroy`,c:`破壊`},
  {q:`die`,c:`死ぬ`},
  {q:`drive`,c:`運転する`},
  {q:`enter`,c:`入る`},
  {q:`exchange`,c:`両替する`},
  {q:`expect`,c:`期待する`},
  {q:`feel`,c:`感じる`},
  {q:`fight`,c:`戦う`},
  {q:`fill`,c:`埋める`},
  {q:`find`,c:`見つける`},
  {q:`fit`,c:`フィットする`},
  {q:`fly`,c:`飛ぶ`},
  {q:`follow`,c:`従う、ついていく`},
  {q:`graduate`,c:`卒業する`},
  {q:`grow`,c:`育つ`},
  {q:`guess`,c:`推測する`},
  {q:`hang`,c:`かける`},
  {q:`happen`,c:`起こる`},
  {q:`hit`,c:`打つ、叩く`},
  {q:`hold`,c:`開く、抱く`},
  {q:`hope`,c:`望む`},
  {q:`hurry`,c:`急ぐ`},
  {q:`hurt`,c:`傷つく`},
  {q:`imagine`,c:`想像する`},
  {q:`introduce`,c:`導入する`},
  {q:`invent`,c:`発明する`},
  {q:`invite`,c:`招待する`},
  {q:`agree`,c:`賛成する`},

]
const WrongVerb =
[
  `賛成する`,
  `頼む`,
  `攻撃`,
  `信じる`,
  `借りる`,
  `破る、壊す`,
  `持って来る`,
  `みがく`,
  `建てる`,
  `呼ぶ`,
  `運ぶ`,
  `捕る`,
  `祝う`,
  `掃除する`,
  `クリックする`,
  `集める`,
  `連絡を取る`,
  `継続する`,
  `おおう`,
  `交わる`,
  `泣く`,
  `決める`,
  `届ける`,
  `破壊`,
  `死ぬ`,
  `運転する`,
  `入る`,
  `両替する`,
  `期待する`,
  `感じる`,
  `戦う`,
  `埋める`,
  `見つける`,
  `フィットする`,
  `飛ぶ`,
  `従う、ついていく`,
  `卒業する`,
  `育つ`,
  `推測する`,
  `かける`,
  `起こる`,
  `打つ、叩く`,
  `開く、抱く`,
  `望む`,
  `急ぐ`,
  `傷つく`,
  `想像する`,
  `導入する`,
  `発明する`,
  `招待する`,

]
const QuizElse =[
 
{q:`absent`,c:`欠席して`},
{q:`another`,c:`別の`},
{q:`any`,c:`いくつかの`},
{q:`boring`,c:`退屈な`},
{q:`bright`,c:`明るい`},
{q:`broken`,c:`壊れた`},
{q:`busy`,c:`忙しい`},
{q:`cheap`,c:`安い`},
{q:`clever`,c:`賢い`},
{q:`close`,c:`近い`},
{q:`common`,c:`一般`},
{q:`crowded`,c:`混雑した`},
{q:`dangerous`,c:`危険な`},
{q:`dark`,c:`暗い`},
{q:`deep`,c:`深い`},
{q:`delicious`,c:`おいしい`},
{q:`dry`,c:`乾いた`},
{q:`each`,c:`それぞれの`},
{q:`elementary`,c:`初級の`},
{q:`enjoyable`,c:`楽しい`},
{q:`enough`,c:`十分な`},
{q:`ethnic`,c:`民族の`},
{q:`excellent`,c:`優れた`},
{q:`excited`,c:`わくわくした`},
{q:`exciting`,c:`わくわくさせる`},
{q:`expensive`,c:`高価な`},
{q:`familiar`,c:`見慣れた`},
{q:`famous`,c:`有名な`},
{q:`fat`,c:`太い`},
{q:`female`,c:`女性の`},
{q:`few`,c:`少数の、ほとんどない`},
{q:`foreign`,c:`外国の`},
{q:`fresh`,c:`新鮮な`},
{q:`full`,c:`いっぱいの`},
{q:`funny`,c:`おかしい`},
{q:`glad`,c:`嬉しい`},
{q:`half`,c:`半分の`},
{q:`heavy`,c:`思い`},
{q:`homesick`,c:`ホームシックの`},
{q:`human`,c:`人間の`},
{q:`junior`,c:`年下の`},
{q:`less`,c:`より少なく`},
{q:`lost`,c:`道に迷った`},
{q:`loud`,c:`うるさい`},
{q:`male`,c:`男性の`},
{q:`mysterious`,c:`神秘的な`},
{q:`narrow`,c:`狭い`},
{q:`national`,c:`国民の`},
{q:`natural`,c:`自然の`},
{q:`necessary`,c:`必要な`},
{q:`nervous`,c:`緊張した`},
{q:`other`,c:`他の`},
{q:`own`,c:`自分自身の`},
{q:`perfect`,c:`完全な`},
{q:`poor`,c:`貧しい`},
{q:`possible`,c:`可能な`},
{q:`public`,c:`公衆の`},
{q:`quiet`,c:`静かな`},
{q:`round`,c:`丸い`},
{q:`shy`,c:`内気な`},
{q:`sick`,c:`病気の`},
{q:`silent`,c:`静かな`},
{q:`smart`,c:`利口な`},
{q:`special`,c:`特殊な`},
{q:`stormy`,c:`嵐の`},
{q:`such`,c:`そのような`},
{q:`sunny`,c:`晴れた`},
{q:`surprised`,c:`驚いた`},
{q:`thirsty`,c:`喉が渇いた`},
{q:` true `,c:`本当の`},
{q:`useful`,c:`役立つ`},
{q:`usual`,c:`いつもの`},
{q:`wet`,c:`ぬれた`},
{q:`wide`,c:`広い`},
{q:`wrong`,c:`間違った`},
{q:`abroad`,c:`海外へ`},
{q:`ago`,c:`前に`},
{q:`ahead`,c:`前方に`},
{q:`almost`,c:`ほとんど`},
{q:`alone`,c:`一人で`},
{q:`always`,c:`いつも、常に`},
{q:`anymore`,c:`これ以上（ない）`},
{q:`around`,c:`あちこちに`},
{q:`cheaply`,c:`安く`},
{q:`daily`,c:`日々、毎日`},
{q:`deeply`,c:`深く`},
{q:`early`,c:`早く`},
{q:`easily`,c:`簡単に`},
{q:`either`,c:`〜もまた（ない）`},
{q:`else`,c:`その他に`},
{q:`especially`,c:`特に`},
{q:`ever`,c:`今までに`},
{q:`far`,c:`遠くに`},
{q:`finally`,c:`最後に`},
{q:`heavily`,c:`ひどく、激しい`},
{q:`inside`,c:`内側に、屋内に`},
{q:`later`,c:`あとで`},
{q:`luckily`,c:`幸運にも`},
{q:`mainly`,c:`主に`},
{q:`maybe`,c:`たぶん`},
{q:`much`,c:`おおいに、ずっと`},
{q:`never`,c:`決して〜ない`},
{q:`pretty`,c:`とても、かなり`},
{q:`quickly`,c:`速く`},
{q:`quietly`,c:`静かに`},
{q:`recently`,c:`最近`},
{q:`sincerely`,c:`敬具`},
{q:`someday`,c:`いつか`},
{q:`still`,c:`いまでも、まだ`},
{q:`straight`,c:`まっすぐに`},
{q:`suddenly`,c:`突然`},
{q:`twice`,c:`二度`},
{q:`yet`,c:`まだ、もう`},
{q:`until`,c:`〜するまで`},
{q:`while`,c:`〜する間に`},
{q:`across`,c:`横切って`},
{q:`against`,c:`に対して`},
{q:`along`,c:`沿って`},
{q:`among`,c:`間で`},
{q:`as`,c:`〜として`},
{q:`behind`,c:`後ろに`},
{q:`beside`,c:`横に、そばに`},
{q:`between`,c:`の間に`},
{q:`during`,c:`間に`},
{q:`since`,c:`以来`},
{q:`through`,c:`通り抜けて`},
{q:`toward`,c:`の方へ`},
{q:`without`,c:`〜なしで、持たずに`},
{q:`anything`,c:`何か`},
{q:`both`,c:`両方とも`},
{q:`nothing`,c:`何もない`},
{q:`someone`,c:`誰か`},
{q:`something`,c:`何か`},

]
const WrongElse =[
  `欠席して`,
`別の`,
`いくつかの`,
`退屈な`,
`明るい`,
`壊れた`,
`忙しい`,
`安い`,
`賢い`,
`近い`,
`一般`,
`混雑した`,
`危険な`,
`暗い`,
`深い`,
`おいしい`,
`乾いた`,
`それぞれの`,
`初級の`,
`楽しい`,
`十分な`,
`民族の`,
`優れた`,
`わくわくした`,
`わくわくさせる`,
`高価な`,
`見慣れた`,
`有名な`,
`太い`,
`女性の`,
`少数の、ほとんどない`,
`外国の`,
`新鮮な`,
`いっぱいの`,
`おかしい`,
`嬉しい`,
`半分の`,
`思い`,
`ホームシックの`,
`人間の`,
`年下の`,
`より少なく`,
`道に迷った`,
`うるさい`,
`男性の`,
`神秘的な`,
`狭い`,
`国民の`,
`自然の`,
`必要な`,
`緊張した`,
`他の`,
`自分自身の`,
`完全な`,
`貧しい`,
`可能な`,
`公衆の`,
`静かな`,
`丸い`,
`内気な`,
`病気の`,
`静かな`,
`利口な`,
`特殊な`,
`嵐の`,
`そのような`,
`晴れた`,
`驚いた`,
`喉が渇いた`,
`本当の`,
`役立つ`,
`いつもの`,
`ぬれた`,
`広い`,
`間違った`,
`海外へ`,
`前に`,
`前方に`,
`ほとんど`,
`一人で`,
`いつも、常に`,
`これ以上（ない）`,
`あちこちに`,
`安く`,
`日々、毎日`,
`深く`,
`早く`,
`簡単に`,
`〜もまた（ない）`,
`その他に`,
`特に`,
`今までに`,
`遠くに`,
`最後に`,
`ひどく、激しい`,
`内側に、屋内に`,
`あとで`,
`幸運にも`,
`主に`,
`たぶん`,
`おおいに、ずっと`,
`決して〜ない`,
`とても、かなり`,
`速く`,
`静かに`,
`最近`,
`敬具`,
`いつか`,
`いまでも、まだ`,
`まっすぐに`,
`突然`,
`二度`,
`まだ、もう`,
`〜するまで`,
`〜する間に`,
`横切って`,
`に対して`,
`沿って`,
`間で`,
`〜として`,
`後ろに`,
`横に、そばに`,
`の間に`,
`間に`,
`以来`,
`通り抜けて`,
`の方へ`,
`〜なしで、持たずに`,
`何か`,
`両方とも`,
`何もない`,
`誰か`,
`何か`,

]
const QuizIdiom =[
  {q:`a few `,c:`2,3の`},
  {q:`a glass of `,c:`コップ１杯の`},
  {q:`a little too`,c:`少し〜すぎる`},
  {q:`a lot`,c:`非常に、とても`},
  {q:`a pair of `,c:`１組の、１足の`},
  {q:`a piece of `,c:`１切れの`},
  {q:`a sheet of `,c:`１枚の`},
  {q:`a slice of `,c:`１切れの`},
  {q:`after a while`,c:`しばらくして`},
  {q:`after school`,c:`放課後に`},
  {q:`agree with `,c:`同意する`},
  {q:`all day (long)`,c:`一日中`},
  {q:`all over the world`,c:`世界中で`},
  {q:`all the way`,c:`はるばる、ずっと`},
  {q:`anything else`,c:`他のなにか`},
  {q:`arrive at`,c:`到着する`},
  {q:`as  as A can`,c:`Aができるだけ`},
  {q:`as soon as …`,c:`･･･するとすぐに`},
  {q:`as usual`,c:`いつものように`},
  {q:`ask (A) for `,c:`Aに〜を求める`},
  {q:`ask A to do`,c:`Aに〜するように頼む`},
  {q:`at first`,c:`最初は`},
  {q:`at last`,c:`ついに、とうとう`},
  {q:`at the end of `,c:`〜の終わりに`},
  {q:`be able to do`,c:`〜することができる`},
  {q:`be absent from `,c:`〜を休んでいる`},
  {q:`be at one's desk`,c:`机に向かっている`},
  {q:`be born`,c:`生まれる`},
  {q:`be covered with `,c:`〜でおおわれている`},
  {q:`be different from `,c:`〜と違う`},
  {q:`be famous for `,c:`〜で有名である`},
  {q:`be full of `,c:`〜でいっぱいである`},
  {q:`be glad to do`,c:`〜してうれしい`},
  {q:`be good at `,c:`〜が得意である`},
  {q:`be in a hurry`,c:`急いでいる`},
  {q:`be in trouble`,c:`困っている`},
  {q:`be interested in `,c:`〜に興味がある`},
  {q:`be out`,c:`外出している`},
  {q:`be proud of `,c:`〜を誇りに思う`},
  {q:`be ready for `,c:`〜の準備ができている`},
  {q:`be ready to do`,c:`〜する準備ができている`},
  {q:`be scared of `,c:`〜が怖い、〜を恐れる`},
  {q:`be surprised at `,c:`〜に驚く`},
  {q:`be tired of `,c:`〜に飽きる`},
  {q:`be worried about `,c:`〜を心配している`},
  {q:`because of`,c:`〜のため`},
  {q:`become friends with `,c:`〜と友だちになる`},
  {q:`belong to `,c:`〜に所属する`},
  {q:`between A and B`,c:`AとBの間に`},
  {q:`both A and B`,c:`AとBの両方とも`},
  {q:`both of `,c:`〜の両方とも`},
  {q:`break one's promise`,c:`約束を破る`},
  {q:`by oneself`,c:`ひとりで、自分で`},
  {q:`change trains`,c:`電車を乗り換える`},
  {q:`clean up `,c:`〜をきれいに片付ける`},
  {q:`come back`,c:`戻る`},
  {q:`come home`,c:`帰宅する`},
  {q:`come true`,c:`（夢が）叶う`},
  {q:`do one's best`,c:`最善をつくす`},
  {q:`do one's homework`,c:`宿題をする`},
  {q:`do well`,c:`うまくいく、成功する`},
  {q:`drive A home`,c:`Aを家まで送る`},
  {q:`each other`,c:`お互い`},
  {q:`… enough for `,c:`〜に十分･･･`},
  {q:`… enough to do `,c:`〜するのに十分･･･`},
  {q:`exchange A for B`,c:`AをBと交換する`},
  {q:`fall asleep`,c:`眠りに落ちる`},
  {q:`fall down`,c:`転倒する、倒れる`},
  {q:`far away`,c:`遠くに`},
  {q:`find out `,c:`〜を見つけ出す`},
  {q:`first of all`,c:`まず最初に`},
  {q:`for a long time`,c:`長い間`},
  {q:`for example`,c:`たとえば`},
  {q:`for the first time`,c:`初めて`},
  {q:`get home`,c:`帰宅する`},
  {q:`get in trouble`,c:`面倒に巻き込まれる`},
  {q:`get off ()`,c:`降りる`},
  {q:`get on ()`,c:`乗る`},
  {q:`get to `,c:`着く`},
  {q:`give A a hand`,c:`Aを手伝う`},
  {q:`give A a ride`,c:`Aを車で送る`},
  {q:`go and do`,c:`〜しに行く`},
  {q:`go away`,c:`立ち去る`},
  {q:`go fishing`,c:`釣りに行く`},
  {q:`go for a walk`,c:`散歩に行く`},
  {q:`go on a tour`,c:`周遊旅行に出かける`},
  {q:`go on a trip`,c:`旅行に出かける`},
  {q:`go shopping`,c:`買い物に行く`},
  {q:`go [walk] straight`,c:`真っ直ぐに行く`},
  {q:`go to bed`,c:`寝る`},
  {q:`go to the doctor`,c:`医者に診てもらいに行く`},
  {q:`go to work`,c:`仕事に行く`},
  {q:`graduate from `,c:`〜を卒業する`},
  {q:`grow up`,c:`成長する`},
  {q:`have a chance to do`,c:`〜する機会がある`},
  {q:`have a cold`,c:`風邪をひく`},
  {q:`have a great time`,c:`楽しく過ごす`},
  {q:`have a headache`,c:`頭痛がする`},
  {q:`have been to `,c:`〜に行ったことがある`},
  {q:`have enough  to do`,c:`〜するのに十分な･･･がある`},
  {q:`have fun`,c:`楽しむ`},
  {q:`have lunch`,c:`昼食をとる`},
  {q:`have time to do`,c:`〜する時間がある`},
  {q:`hear from `,c:`〜から便りがある`},
  {q:`how long …`,c:`どのくらい長く･･･`},
  {q:`how many times …`,c:`何回･･･`},
  {q:`how often …`,c:`どのくらいの頻度で･･･`},
  {q:`how to do`,c:`〜する方法、〜の仕方`},
  {q:`hurry up`,c:`急ぐ`},
  {q:`I'd like to do`,c:`〜したい`},
  {q:`in fact`,c:`実は`},
  {q:`in front of `,c:`〜の前で`},
  {q:`in one's opinion`,c:`〜の意見では`},
  {q:`in the middle of `,c:`〜の真ん中に、最中に`},
  {q:`in the morning`,c:`午前に`},
  {q:`in the world`,c:`世界で`},
  {q:`in time to do`,c:`〜するのに間に合って`},
  {q:`invite A to B`,c:`AをBに招待する`},
  {q:`It takes A (時間) to do`,c:`Aが〜するのに（時間）がかかる`},
  {q:`knock on `,c:`〜をノックする`},
  {q:`last week`,c:`先週［先月、昨年］`},
  {q:`laugh at `,c:`〜を見て笑う`},
  {q:`leave A at home`,c:`Aを家に置き忘れる`},
  {q:`leave a message`,c:`伝言を残す`},
  {q:`look around ()`,c:`〜を見て回る`},
  {q:`look for `,c:`〜を探す`},
  {q:`look forward to doing [A]`,c:`〜するのを楽しみに待つ`},
  {q:`look well`,c:`元気そうに見える`},
  {q:`lots of `,c:`たくさんの〜`},
  {q:`make a speech`,c:`スピーチする`},
  {q:`more than `,c:`〜以上`},
  {q:`most of `,c:`〜のほとんど`},
  {q:`move to `,c:`〜に引っ越す`},
  {q:`need to do`,c:`〜する必要がある`},
  {q:`next time`,c:`次回は`},
  {q:`next to `,c:`〜の隣に`},
  {q:`not  at all`,c:`まったく〜ない`},
  {q:`not  yet`,c:`まだ〜ない`},
  {q:`not have to do`,c:`〜しなくて良い`},
  {q:`not only A but also B`,c:`AだけでなくBも`},
  {q:`on business`,c:`仕事で`},
  {q:`on foot`,c:`歩いて、徒歩で`},
  {q:`on one's [the] right`,c:`右手に`},
  {q:`on one's [the] way home`,c:`家に帰る途中で`},
  {q:`on one's [the] way to `,c:`〜へ行く途中で`},
  {q:`on weekends`,c:`週末に`},
  {q:`one more`,c:`もう１つの`},
  {q:`one of `,c:`〜の１つ`},
  {q:`one of the  …`,c:`もっとも〜な･･･の１つ`},
  {q:`over there`,c:`むこうに`},
  {q:`pick up `,c:`車で迎えに行く`},
  {q:`put on `,c:`着る`},
  {q:`right now`,c:`すぐに`},
  {q:`run away`,c:`逃げる、走り去る`},
  {q:`save money`,c:`貯金する`},
  {q:`say hello to `,c:`よろしくと伝える`},
  {q:`shake hands with `,c:`握手する`},
  {q:`shout at `,c:`叫ぶ`},
  {q:`show A around `,c:`Aに〜を案内する`},
  {q:`so  that …`,c:`とても〜なので･･･`},
  {q:`something `,c:`なにか〜なこと`},
  {q:`something to do`,c:`〜すべきもの`},
  {q:`spend A on `,c:`Aを〜に費やす`},
  {q:`stay home`,c:`家にいる`},
  {q:`stay up late`,c:`夜ふかしする`},
  {q:`stay with `,c:`〜のところに滞在する`},
  {q:`take A to B`,c:`AをBにつれていく`},
  {q:`take care of `,c:`世話をする`},
  {q:`take lessons`,c:`レッスンを受ける`},
  {q:`take off`,c:`離陸する`},
  {q:`take off `,c:`脱ぐ`},
  {q:`take part in `,c:`参加する`},
  {q:`talk on the phone`,c:`電話で話す`},
  {q:`tell A to do`,c:`Aに〜するように言う`},
  {q:`than usual`,c:`いつもより`},
  {q:`the other day`,c:`先日`},
  {q:`think about doing`,c:`〜することについて考える`},
  {q:`think of `,c:`〜のことを考える`},
  {q:`this morning`,c:`今朝`},
  {q:`throw away `,c:`捨てる`},
  {q:`too  to do`,c:`あまりに〜なので･･･できない`},
  {q:`travel to `,c:`〜へ旅行する`},
  {q:`try on `,c:`〜を試着する`},
  {q:`turn down `,c:`音量を下げる`},
  {q:`turn left [right]`,c:`左（右）に曲がる`},
  {q:`turn off `,c:`消す、止める`},
  {q:`turn on `,c:`つける、出す`},
  {q:`turn up `,c:`音量を上げる`},
  {q:`twice a month`,c:`月［週、日］に２回`},
  {q:`visit [see] A in the hospital`,c:`入院中のAを見舞う`},
  {q:`wait for `,c:`〜を待つ`},
  {q:`wake up`,c:`起きる、目が覚める`},
  {q:`walk along `,c:`〜に沿って歩く`},
  {q:`want A to do`,c:`Aに〜してもらいたい`},
  {q:`want to be [become]`,c:`〜になりたい`},
  {q:`what to do`,c:`何を〜すべきか`},
  {q:`work well`,c:`うまくいく、効く`},
  {q:`would love to do`,c:`〜したい`},
  {q:`write to `,c:`〜に手紙を書く`},
  {q:` year(s) old`,c:`〜歳`},
]
const WrongIdiom =[
  `2,3の`,
`コップ１杯の`,
`少し〜すぎる`,
`非常に、とても`,
`１組の、１足の`,
`１切れの`,
`１枚の`,
`１切れの`,
`しばらくして`,
`放課後に`,
`同意する`,
`一日中`,
`世界中で`,
`はるばる、ずっと`,
`他のなにか`,
`到着する`,
`Aができるだけ`,
`･･･するとすぐに`,
`いつものように`,
`Aに〜を求める`,
`Aに〜するように頼む`,
`最初は`,
`ついに、とうとう`,
`〜の終わりに`,
`〜することができる`,
`〜を休んでいる`,
`机に向かっている`,
`生まれる`,
`〜でおおわれている`,
`〜と違う`,
`〜で有名である`,
`〜でいっぱいである`,
`〜してうれしい`,
`〜が得意である`,
`急いでいる`,
`困っている`,
`〜に興味がある`,
`外出している`,
`〜を誇りに思う`,
`〜の準備ができている`,
`〜する準備ができている`,
`〜が怖い、〜を恐れる`,
`〜に驚く`,
`〜に飽きる`,
`〜を心配している`,
`〜のため`,
`〜と友だちになる`,
`〜に所属する`,
`AとBの間に`,
`AとBの両方とも`,
`〜の両方とも`,
`約束を破る`,
`ひとりで、自分で`,
`電車を乗り換える`,
`〜をきれいに片付ける`,
`戻る`,
`帰宅する`,
`（夢が）叶う`,
`最善をつくす`,
`宿題をする`,
`うまくいく、成功する`,
`Aを家まで送る`,
`お互い`,
`〜に十分･･･`,
`〜するのに十分･･･`,
`AをBと交換する`,
`眠りに落ちる`,
`転倒する、倒れる`,
`遠くに`,
`〜を見つけ出す`,
`まず最初に`,
`長い間`,
`たとえば`,
`初めて`,
`帰宅する`,
`面倒に巻き込まれる`,
`降りる`,
`乗る`,
`着く`,
`Aを手伝う`,
`Aを車で送る`,
`〜しに行く`,
`立ち去る`,
`釣りに行く`,
`散歩に行く`,
`周遊旅行に出かける`,
`旅行に出かける`,
`買い物に行く`,
`真っ直ぐに行く`,
`寝る`,
`医者に診てもらいに行く`,
`仕事に行く`,
`〜を卒業する`,
`成長する`,
`〜する機会がある`,
`風邪をひく`,
`楽しく過ごす`,
`頭痛がする`,
`〜に行ったことがある`,
`〜するのに十分な･･･がある`,
`楽しむ`,
`昼食をとる`,
`〜する時間がある`,
`〜から便りがある`,
`どのくらい長く･･･`,
`何回･･･`,
`どのくらいの頻度で･･･`,
`〜する方法、〜の仕方`,
`急ぐ`,
`〜したい`,
`実は`,
`〜の前で`,
`〜の意見では`,
`〜の真ん中に、最中に`,
`午前に`,
`世界で`,
`〜するのに間に合って`,
`AをBに招待する`,
`Aが〜するのに（時間）がかかる`,
`〜をノックする`,
`先週［先月、昨年］`,
`〜を見て笑う`,
`Aを家に置き忘れる`,
`伝言を残す`,
`〜を見て回る`,
`〜を探す`,
`〜するのを楽しみに待つ`,
`元気そうに見える`,
`たくさんの〜`,
`スピーチする`,
`〜以上`,
`〜のほとんど`,
`〜に引っ越す`,
`〜する必要がある`,
`次回は`,
`〜の隣に`,
`まったく〜ない`,
`まだ〜ない`,
`〜しなくて良い`,
`AだけでなくBも`,
`仕事で`,
`歩いて、徒歩で`,
`右手に`,
`家に帰る途中で`,
`〜へ行く途中で`,
`週末に`,
`もう１つの`,
`〜の１つ`,
`もっとも〜な･･･の１つ`,
`むこうに`,
`車で迎えに行く`,
`着る`,
`すぐに`,
`逃げる、走り去る`,
`貯金する`,
`よろしくと伝える`,
`握手する`,
`叫ぶ`,
`Aに〜を案内する`,
`とても〜なので･･･`,
`なにか〜なこと`,
`〜すべきもの`,
`Aを〜に費やす`,
`家にいる`,
`夜ふかしする`,
`〜のところに滞在する`,
`AをBにつれていく`,
`世話をする`,
`レッスンを受ける`,
`離陸する`,
`脱ぐ`,
`参加する`,
`電話で話す`,
`Aに〜するように言う`,
`いつもより`,
`先日`,
`〜することについて考える`,
`〜のことを考える`,
`今朝`,
`捨てる`,
`あまりに〜なので･･･できない`,
`〜へ旅行する`,
`〜を試着する`,
`音量を下げる`,
`左（右）に曲がる`,
`消す、止める`,
`つける、出す`,
`音量を上げる`,
`月［週、日］に２回`,
`入院中のAを見舞う`,
`〜を待つ`,
`起きる、目が覚める`,
`〜に沿って歩く`,
`Aに〜してもらいたい`,
`〜になりたい`,
`何を〜すべきか`,
`うまくいく、効く`,
`〜したい`,
`〜に手紙を書く`,
`〜歳`,
]
const QuizExpress =[
  {q:`know a lot`,c:`よく知っている`},
  {q:`a lot of books`,c:`たくさんの本`},
  {q:`after school`,c:`放課後`},
  {q:`at home`,c:`家で`},
  {q:`a glass of milk`,c:`コップ一杯のミルク`},
  {q:`a cup of tea`,c:`一杯のお茶`},
  {q:`a few years`,c:`数年`},
  {q:`a kind of fish`,c:`魚の一種`},
  {q:`speak English a little`,c:`英語を少し話す`},
  {q:`That's all for now.`,c:`これでおしまい。`},
  {q:`a great many people`,c:`かなり多くの人々`},
  {q:`a long time ago`,c:`遠いむかし`},
  {q:`a part of the United States`,c:`アメリカ合衆国の一部`},
  {q:`a piece of meat`,c:`肉一切れ`},
  {q:`all the way`,c:`はるばる、ずっと、初めから終わりまで`},
  {q:`arrive at`,c:`～に着く`},
  {q:`I can run fast as fast as Tom.`,c:`私とトムは同じくらい早く走れる。`},
  {q:`as soon as he got the letter`,c:`手紙を受け取るとすぐに`},
  {q:`asked for his help`,c:`彼の助けを求めた`},
  {q:`at first`,c:`最初 初めのうちは`},
  {q:`at last`,c:`とうとう、ついに`},
  {q:`Kumi is able to sing.`,c:`久美は上手に歌うことができます。`},
  {q:`Kyoto is famous for its old temples.`,c:`京都は古いお寺で有名である。`},
  {q:`The streets were full of cars.`,c:`通りは車でいっぱいでした。`},
  {q:`I'm going to visit Kyoto.`,c:`私は京都を訪れるつもりです。`},
  {q:`The American went away.`,c:`そのアメリカ人はたちさりました。`},
  {q:`He didn't give up the plan.`,c:`彼はその計画をあきらめませんでした。`},
  {q:`He went to sleep.`,c:`彼は眠ってしまいました。`},
  {q:`Let's go swimming in the river.`,c:`川へ泳ぎにいきましょう。`},
  {q:`I went up to the police officer.`,c:`警官のところへ近づいていきました。`},
  {q:`I grew up in Tokyo.`,c:`東京で育ちました。`},
  {q:`We had a good time in Hokkaido.`,c:`北海道で楽しく過ごしました。`},
  {q:`I have to go shopping in the evening.`,c:`夕方に買い物に行かなければなりません。`},
  {q:`help him with his homework`,c:`彼の宿題を手伝う`},
  {q:`How about you?`,c:`あなたはどうですか。`},
  {q:`I see.`,c:`わかりました。`},
  {q:`My father will be back in a few days.`,c:`父は2,3日したら帰ってきます。`},
  {q:`A car stopped in front of my house.`,c:`1台の車が私の家の前に止まりました。`},
  {q:`In the end he got a gold medal.`,c:`ついに彼は金メダルを取りました。`},
  {q:`What do you want to be in the future?`,c:`将来、何になりたいの。`},
  {q:`In those days there were no planes.`,c:`その当時は飛行機はありませんでした。`},
  {q:`These days many people use a computer.`,c:`近頃多くの人がコンピューターを使います。`},
  {q:`Let me see….`,c:`ええと。そうですね。`},
  {q:`Look at that car.`,c:`あの車をごらんなさい。`},
  {q:`What are you looking for ?`,c:`何をさがしているのですか。`},
  {q:`You must not look in my house.`,c:`わたしの部屋をのぞいてはいけません。`},
  {q:`It looks like a cat.`,c:`それは猫のように見えます。`},
  {q:`Math became more and more difficult.`,c:`数学はますます難しくなりました。`},
  {q:`There are more than 600 students.`,c:`私たちの学校には600人以上の生徒がいます。`},
  {q:`No one could answer the question.`,c:`だれもその質問に答えることができませんでした。`},
  {q:`push a button`,c:`ボタンをおす`},
  {q:`ring a bell`,c:`ベルを鳴らす`},
  {q:`dig a hole`,c:`穴をほる`},
  {q:`break glass`,c:`ガラスを割る`},
  {q:`spend money`,c:`お金をつかう`},
  {q:`win a prize`,c:`賞をとる`},
  {q:`buy a ticket`,c:`きっぷを買う`},
  {q:`hold a meeting`,c:`会を開く`},
  {q:`tell a story`,c:`物語を話す`},
  {q:`catch a fish`,c:`魚を捕まえる`},
  {q:`call her name`,c:`彼女の名前を呼ぶ`},
  {q:`save his life`,c:`彼の命を救う`},
  {q:`a tall tree`,c:`高い木`},
  {q:`a beautiful flower`,c:`美しい花`},
  {q:`a big rock`,c:`大きな岩`},
  {q:`a small island`,c:`小さな島`},
  {q:`cross a road`,c:`道路をわたる`},
  {q:`turn a corner`,c:`角を曲がる`},
  {q:`throw a stone`,c:`石を投げる`},
  {q:`fall to the ground`,c:`地面にたおれる`},
  {q:`fish in a lake`,c:`湖でつりをする`},
  {q:`swim across a river`,c:`川を泳いでわたる`},
  {q:`camp in a forest.`,c:`森でキャンプをする`},
  {q:`lie on the beach`,c:`浜にねころぶ`},
  {q:`an important thing`,c:`重要なこと`},
  
]
const WrongExpress =[
  `よく知っている`,
`たくさんの本`,
`放課後`,
`家で`,
`コップ一杯のミルク`,
`一杯のお茶`,
`数年`,
`魚の一種`,
`英語を少し話す`,
`これでおしまい。`,
`かなり多くの人々`,
`遠いむかし`,
`アメリカ合衆国の一部`,
`肉一切れ`,
`はるばる、ずっと、初めから終わりまで`,
`～に着く`,
`私とトムは同じくらい早く走れる。`,
`手紙を受け取るとすぐに`,
`彼の助けを求めた`,
`最初 初めのうちは`,
`とうとう、ついに`,
`久美は上手に歌うことができます。`,
`京都は古いお寺で有名である。`,
`通りは車でいっぱいでした。`,
`私は京都を訪れるつもりです。`,
`そのアメリカ人はたちさりました。`,
`彼はその計画をあきらめませんでした。`,
`彼は眠ってしまいました。`,
`川へ泳ぎにいきましょう。`,
`警官のところへ近づいていきました。`,
`東京で育ちました。`,
`北海道で楽しく過ごしました。`,
`夕方に買い物に行かなければなりません。`,
`彼の宿題を手伝う`,
`あなたはどうですか。`,
`わかりました。`,
`父は2,3日したら帰ってきます。`,
`1台の車が私の家の前に止まりました。`,
`ついに彼は金メダルを取りました。`,
`将来、何になりたいの。`,
`その当時は飛行機はありませんでした。`,
`近頃多くの人がコンピューターを使います。`,
`ええと。そうですね。`,
`あの車をごらんなさい。`,
`何をさがしているのですか。`,
`わたしの部屋をのぞいてはいけません。`,
`それは猫のように見えます。`,
`数学はますます難しくなりました。`,
`私たちの学校には600人以上の生徒がいます。`,
`だれもその質問に答えることができませんでした。`,
`ボタンをおす`,
`ベルを鳴らす`,
`穴をほる`,
`ガラスを割る`,
`お金をつかう`,
`賞をとる`,
`きっぷを買う`,
`会を開く`,
`物語を話す`,
`魚を捕まえる`,
`彼女の名前を呼ぶ`,
`彼の命を救う`,
`高い木`,
`美しい花`,
`大きな岩`,
`小さな島`,
`道路をわたる`,
`角を曲がる`,
`石を投げる`,
`地面にたおれる`,
`湖でつりをする`,
`川を泳いでわたる`,
`森でキャンプをする`,
`浜にねころぶ`,
`重要なこと`,
]

function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;

let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);

let a = 0;
let max = 100;
let e = 0;let f = 0;let g = 0;
let h = 0;

selectbox.onchange = function(){

if(selectbox.value === "1-10"){  
  function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,60];}
  Change(); Quizset();
  }

else if(selectbox.value === "11-20"){ 
  function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,100];}
  Change();
   Quizset();

  }
 else if(selectbox.value === "21-30"){
  function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,90];}
  Change();
   Quizset();
}  
else if(selectbox.value === "31-40"){
      function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,90];}
      Change();
      Quizset();
    }
else if(selectbox.value === "41-50"){
function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,100];}
Change();    Quizset();
}
else if(selectbox.value === "51-60"){
       
       function Change() { [a, h, e,f,g,max] = [50, 58, 60,60,60,110];}
Change();
Quizset();
}
else if(selectbox.value === "61-70"){
      
      function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,50];}
Change();Quizset();
}
else if(selectbox.value === "71-80"){
       function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,60];}
Change();Quizset();
}
else if(selectbox.value === "81-90"){
      function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,70];}
Change();Quizset();
 }
                
else if(selectbox.value === "91-100"){
          function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,80];}
Change();Quizset();
 }
else if(selectbox.value === "101-110"){
         function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,90];}
Change();Quizset();
 }
 else if(selectbox.value === "111-120"){
       function Change() { [a, h, e,f,g,max] = [110, 118, 40,40,40,100];}
     Change();Quizset();
 }
 else if(selectbox.value === "121-130"){
        function Change() { [a, h, e,f,g,max] = [120, 128, 30,30,30,90];}
     Change();Quizset();
 }
else if(selectbox.value === "131-140"){
      function Change() { [a, h, e,f,g,max] = [130, 138,40,40,40,120];}
Change();Quizset();
  }
  else if(selectbox.value === "141-150"){
      function Change() { [a, h, e,f,g,max] = [140, 148,40,40,40,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "151-160"){
      function Change() { [a, h, e,f,g,max] = [150, 158,20,20,20,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "161-170"){
      function Change() { [a, h, e,f,g,max] = [160, 169,20,20,20,120];}
 Change();Quizset();
  }
  
  else{

    location.reload();
  }

  function Quizset () {
    choice1.removeEventListener('click',event);
    const b = Math.floor(Math.random() * (max - e)) + e ;
    let c = Math.floor(Math.random() * (max - f)) + f ;
    let d = Math.floor(Math.random() * (max - g)) + g ;
    
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = quizSet[a].q;
  
  var speak   = new SpeechSynthesisUtterance();
  speak.text  = question.textContent;
  speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
  speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
  speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
  
  speechSynthesis.speak(speak);
  
  
  
  while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  
  item1.textContent = quizSet[a].c;
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = WrongAns[b];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
    item3.textContent = WrongAns[c];
    const ul2 = document.querySelector('ul');
      ul.appendChild(item3);
    
     item4.textContent = WrongAns[d];
     const ul3 = document.querySelector('ul');
       ul.appendChild(item4);
  
  
       function shuffle() {
  
        const x = Math.floor(Math.random() * 4 + 1) ;
        //console.log(x);
        
        if(x == 1){ 
          ul.insertBefore(item3,item1);
          ul.insertBefore(item2,item1);
          ul.insertBefore(item4,item1);
      
        }else if(x == 2){
          ul.insertBefore(item1,item4);
          ul.insertBefore(item2,item1);
        }else if(x == 3){
          ul.insertBefore(item1,item3);
          ul.insertBefore(item2,item1);
        }
        else{
          ul.insertBefore(item4,item2);
        }
      }
      
      shuffle();
  
      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
  
  
          if(t == item1){
          //正解の場合
  
          modal3.classList.remove('hidden');
          isCorrected.textContent = `正解！`;  
  
          setTimeout(()=>{
            modal3.classList.add('hidden');
  
            choice1.removeEventListener('click',event);
  
            //合格の場合
            if(a > h){


              var Finish   = new SpeechSynthesisUtterance();
              Finish.text  = 'Great!!Good job!!';
              Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(Finish);
    
              modal.classList.remove('hidden');
               //alert(`合格!!`)
                
                close.addEventListener('click',()=>{
                  location.reload();
              })
  
            }else{
                //次の問題へ
              a++;
              Quizset();
            }
          },500);
      
        }else{
          
            //間違った場合
  
          modal2.classList.remove('hidden');
          
          answer.textContent = ` 
          "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
  
          var OMT   = new SpeechSynthesisUtterance();
          OMT.text  = 'one more time';
          OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
          OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
          OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
          speechSynthesis.speak(OMT);
          
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
          });
          
          Change();
          Quizset();
  
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();
  
  } 
  
}

let selectbox1 = form.selectbox1;
selectbox1.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);
//動詞
selectbox1.onchange = function(){

if(selectbox1.value === "verb1"){ 
   function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,49];}
  Change(); Quizset(); 
}
else if(selectbox1.value === "verb2"){
   function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,50];}
  Change(); Quizset();
  }
  else if(selectbox1.value === "verb3"){
     function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,50];}
  Change(); Quizset();
    }
  else if(selectbox1.value === "verb4"){
       function Change() { [a, h, e,f,g,max] = [30, 38, 0,0,0,29];}
  Change(); Quizset();
      }
  else if(selectbox1.value === "verb5"){
         function Change() { [a, h, e,f,g,max] = [40,48, 0,0,0,39];}
  Change(); Quizset();
        }
 else { location.reload();}



 function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizVerb[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizVerb[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongVerb[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongVerb[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongVerb[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 

}
//その他
let selectbox2 = form.selectbox2;
selectbox2.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);
selectbox2.onchange = function(){
 if(selectbox2.value === "else1"){   
          function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,132];}
          Change(); Quizset(); 
 }
else if(selectbox2.value === "else2"){
         function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,132];}
        Change(); Quizset(); 
    }
else if(selectbox2.value === "else3"){         
               function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,132];}
              Change(); Quizset(); 
                }
else if(selectbox2.value === "else4"){               
                 function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,132];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else5"){               
                 function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,132];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else6"){               
                 function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else7"){               
                 function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else8"){               
                 function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else9"){               
                 function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,79];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else10"){               
                 function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,120];}
                Change(); Quizset(); 
                }
  else if(selectbox2.value === "else11"){               
                 function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,99];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else12"){               
                 function Change() { [a, h, e,f,g,max] = [110, 118, 0,0,0,100];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else13"){               
                 function Change() { [a, h, e,f,g,max] = [120, 130, 0,0,0,100];}
                Change(); Quizset(); 
                }                

else { location.reload();}
 
function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizElse[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizElse[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongElse[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongElse[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongElse[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 

}
let selectbox3 = form2.selectbox3;
selectbox3.addEventListener('change', ()=> {
}, false);
//熟語
selectbox3.onchange = function(){
  if(selectbox3.value === "idiom1"){          
           function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,99];}
           Change(); Quizset(); 
     }
           else if(selectbox3.value === "idiom2"){
             function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,99];}
             Change(); Quizset(); 
   }
    else if(selectbox3.value === "idiom3"){    
               function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,99];}
               Change(); Quizset(); 
       }
    else if(selectbox3.value === "idiom4"){
                 function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,99];}
                 Change(); Quizset(); 
     }
    else if(selectbox3.value === "idiom5"){
              function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,99];}
              Change(); Quizset(); 
      }
     else if(selectbox3.value === "idiom6"){
               function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
               Change(); Quizset(); 
       }
      else if(selectbox3.value === "idiom7"){
                function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
                Change(); Quizset(); 
      }
       else if(selectbox3.value === "idiom8"){
               function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
               Change(); Quizset(); 
    }
       else if(selectbox3.value === "idiom9"){
              function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,79];}
              Change(); Quizset(); 
      }
     else if(selectbox3.value === "idiom10"){
             function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,89];}
             Change(); Quizset(); 
      }
      else if(selectbox3.value === "idiom11"){
        function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,99];}
        Change(); Quizset(); 
 }
 else if(selectbox3.value === "idiom12"){
  function Change() { [a, h, e,f,g,max] = [110, 118, 0,0,0,100];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom13"){
  function Change() { [a, h, e,f,g,max] = [120, 128, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom14"){
  function Change() { [a, h, e,f,g,max] = [130, 98, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom15"){
  function Change() { [a, h, e,f,g,max] = [140, 148, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom16"){
  function Change() { [a, h, e,f,g,max] = [150, 158, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom17"){
  function Change() { [a, h, e,f,g,max] = [160, 168, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom18"){
  function Change() { [a, h, e,f,g,max] = [170, 178, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom19"){
  function Change() { [a, h, e,f,g,max] = [180, 188, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom20"){
  function Change() { [a, h, e,f,g,max] = [190, 197, 0,0,0,120];}
  Change(); Quizset(); 
}


else { location.reload();}
  
function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizIdiom[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizIdiom[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongIdiom[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongIdiom[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongIdiom[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 

 }
//表現
let selectbox4 = form2.selectbox4;
selectbox4.addEventListener('change', ()=> {
}, false);
selectbox4.onchange = function(){
  if(selectbox4.value === "express1"){
             function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,73];}
            Change(); Quizset(); 
      }
    else if(selectbox4.value === "express2"){
             function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,73];}
             Change(); Quizset(); 
     }
    else if(selectbox4.value === "express3"){
             function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,73];}
             Change(); Quizset(); 
     }
     else if(selectbox4.value === "express4"){
            function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,73];}
            Change(); Quizset(); 
      }
    else if(selectbox4.value === "express5"){
            function Change() { [a, h, e,f,g,max] = [40, 48, 0,0,0,39];}
            Change(); Quizset(); 
     }
     else if(selectbox4.value === "express6"){
            function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
            Change(); Quizset(); 
      }
     else if(selectbox4.value === "express7"){
                 function Change() { [a, h, e,f,g,max] = [60, 71, 0,0,0,59];}
                 Change(); Quizset(); 
         }
 
 else { location.reload();}

 function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizExpress[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizExpress[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongExpress[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongExpress[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongExpress[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 


 }


