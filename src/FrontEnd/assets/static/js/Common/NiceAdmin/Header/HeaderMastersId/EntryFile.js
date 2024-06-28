import { StartFunc as HeaderMastersCustomersId } from "./HeaderMastersCustomersId/EntryFile.js";
import { StartFunc as HeaderMastersItemsFertilizersId } from "./HeaderMastersItemsFertilizersId/EntryFile.js";
import { StartFunc as HeaderMastersItemsPesticidesId } from "./HeaderMastersItemsPesticidesId/EntryFile.js";

let StartFunc = () => {
    HeaderMastersCustomersId();
    HeaderMastersItemsFertilizersId();
    HeaderMastersItemsPesticidesId();
};

StartFunc();