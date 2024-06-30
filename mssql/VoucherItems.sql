select bi_tab.idno1 as RefPK, bi_tab.idno11 as id,
bi_tab.pracc_cod as ItemCode, RTRIM( pr_cod_tab.nam) as ItemName ,
isnull(bi_tab.bno,'') as BatchRefPk ,ISNULL( batch_tab.bno,'') as BatchNumber,
bi_tab.sno,
CAST(bi_tab.noof as int) as Qty,cast( bi_tab.amt as decimal(12,2)) as Amount 
from bi_tab left join pr_cod_tab on
bi_tab.pracc_cod = pr_cod_tab.acc_cod 
left join batch_tab on bi_tab.bno = batch_tab.idno11
