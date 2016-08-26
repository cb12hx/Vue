
<template>
    <div class="flag">
      <ul>
        <li v-for="item in nationList">
          <img :src=`/static/images/nationalFlag/${item.flag}.png` />
          <div>
            <p v-text=`${item.name}`></p>
            <section v-text="item.des"></section>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {      
      nationList: [
      {name:'中国',eng:'China',flag:'china_flag',des:'伟大的民族，足球的起源国，曾经在2002年进入日韩世界杯'},
      {name:'阿根廷',eng:'Argentina',flag:'argentina_flag',des:'阿根廷国家男子足球队是世界上最成功的国家队之一，曾19次夺取过国家队重大赛事的冠军（和乌拉圭同享纪录），包括两次称雄世界杯（1978、1986年）、14次夺得美洲杯、两次获得奥运男足金牌（2004、2008年）以及一次联合会杯'},
      {name:'澳大利亚',eng:'Australia',flag:'australia_flag',des:'澳大利亚国家男子足球队由澳大利亚足球协会（Football Federation Australia）负责管辖。原属于大洋洲足球协会，澳大利亚足球协会于2006年1月1日正式成为了亚洲足协成员，之后一直是亚洲的一流强队'},
      {name:'巴西',eng:'Brazil',flag:'brazil_flag',des:'巴西队由巴西足球联盟负责管辖，巴西足球联会建立于1914年，并于1924年加入国际足联。并代表巴西参加大型国际性足球赛事。'},
      {name:'加拿大',eng:'Canada',flag:'canada',des:'加拿大国家足球队是由加拿大足球协会管理，是一支位于北美洲的国家足球队。'},
      {name:'英格兰',eng:'England',flag:'england_flag',des:'英格兰国家男子足球队是英格兰足球联合会管理的国家级别足球代表队，由于历史原因，英国的四大地区足球代表队都是独立的国家级别代表队。'},
      {name:'法国',eng:'France',flag:'france_flag',des:'法国国家男子足球队是法国足球总会领导的国家级别足球队。'},
      {name:'德国',eng:'Germany',flag:'germany_flag',des:'德国国家男子足球队，由德国足球协会负责管辖，代表德国参加大型国际性足球赛事，是世界上历史最悠久、战绩最辉煌的豪门球队之一。德国由于二战后政治原因分裂成东德、西德以及萨尔保护领'},
      {name:'印度',eng:'India',flag:'india_flag',des:'印度的足球俱乐部在1888年就成立，这还被认为是亚洲乃至世界最为古老的足球俱乐部。虽然印度足球水平不高，但印度国内狂热的球迷却十分众多'},
      {name:'爱尔兰',eng:'Ireland',flag:'ireland_flag',des:'爱尔兰国家男子足球队（Republic of Ireland national football team）爱尔兰足协是爱尔兰国家足球代表队，由爱尔兰足球协会管理，他们在1988年德国欧洲国家杯之前并未打进任何国家队杯赛'},
      {name:'意大利',eng:'Italy',flag:'italy_flag',des:'意大利国家男子足球队是意大利足协所组织的国家级别的足球队，代表意大利足球的精神面貌与最高水平。意大利队曾赢得四届世界杯冠军，国家队的传统球衣是蓝衫白裤蓝袜'},
      {name:'韩国',eng:'Korea',flag:'korea_flag',des:'韩国国家男子足球队全称为“韩国国家足球代表队”，是属于韩国足球协会官方认可的国家足球队'},
      {name:'墨西哥',eng:'Mexico',flag:'mexico_flag',des:'墨西哥国家足球队是墨西哥官方足球队，由墨西哥足球协会管理，一向于中北美洲独占鳌头。墨西哥国家足球队于1927年成立，由1930年世界杯至2014年世界杯共15次晋身决赛周，当中于1986年由墨西哥主办的世界杯最成功，该届墨西哥闯入八强，在互射点球以1:4不敌西德下出局'},
      {name:'荷兰',eng:'Netherlands',flag:'netherlands_flag',des:'荷兰国家队是欧洲传统强队，70年代以来以全攻全守战术而扬名世界足坛，留下过无数经典的战例。'},
      {name:'新西兰',eng:'New Zealand',flag:'new_zealand_flag',des:'新西兰国家男子足球队由新西兰足球协会所管理。新西兰曾晋身1982年的世界杯，但却在分组赛中先以2比5不敌苏格兰，再被苏联及巴西以3:0和4:0击败，3战败北，得小组第4名出局。 2009年成功入围2010南非世界杯。'},
      {name:'俄罗斯',eng:'Russia',flag:'russia_flag',des:'俄罗斯国家男子足球队是代表俄罗斯的官方足球队，由俄罗斯足球联会管理。俄罗斯的官方足球队早在沙俄时代已有纪录，当时第一场国际赛乃1912年对赛芬兰，当时落败1比2'},
      {name:'土耳其',eng:'Turkey',flag:'turkey_flag',des:'土耳其国家男子足球队是土耳其的官方足球代表队，成立于1923年。'},]
    }
  }
}
</script>
<style lang="scss" scoped>
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
  .flag{
    margin:toRem(20px) toRem(10px) toRem(120px);
    li{
      height: toRem(160px);
      border-bottom: 1px solid rgba(174,174,174,.2) ; 
      margin-bottom: toRem(10px);
      &:after{     
         content: "."; 
        display: block;
        height: 0; 
        clear: both; 
        visibility: hidden;
      };

      img{
        width:toRem(160px);
        height:toRem(160px);
        margin:toRem(-20px) toRem(10px);
        float: left;
        vertical-align: top;

      }
       div{
        width:toRem(490px);
        overflow: hidden;
        float: left;
        p{
          font-size:toRem(30px);
          color:#444;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        section{
          margin-top: toRem(10px);
          font-size:toRem(26px);
          line-height: toRem(35px);
          color:#999;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

      }
      }
  }
</style>


