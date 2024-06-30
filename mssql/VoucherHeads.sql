select bi_astab.idno as id, RTRIM(ParentVoucherTable.nam) as ParentVoucherName, RTRIM(cs_rec_cod.nam) as VoucherName ,
CAST(bi_astab.bl_no AS int) AS VoucherNumber,
CAST(bi_astab.da AS DATE) as Date,
 bi_astab.acc_cod as HeadAccCode,
RTRIM(bi_astab.nam1) as nam1, RTRIM(bi_astab.nam2) as nam2, RTRIM(bi_astab.nam3) as nam3,
RTRIM(bi_astab.nam4) as nam4, RTRIM(bi_astab.nam6) as nam6, RTRIM(bi_astab.nam7) as nam7,
RTRIM(acc_cod_tab.nam) as HeadAccountName
from bi_astab left join cs_rec_cod on bi_astab.bi_bok_cod= cs_rec_cod.acc_cod
left join cs_rec_cod as ParentVoucherTable on cs_rec_cod.amt1= ParentVoucherTable.acc_cod
left join acc_cod_tab on bi_astab.acc_cod= acc_cod_tab.acc_cod
