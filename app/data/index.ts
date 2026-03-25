// --- 1. HINDI TO ALL IMPORTS ---
import { hindiToAssamese } from "./hindi_to_all/hindi_to_assamese";
import { hindiToBengali } from "./hindi_to_all/hindi_to_bengali";
import { hindiToBodo } from "./hindi_to_all/hindi_to_bodo";
import { hindiToDogri } from "./hindi_to_all/hindi_to_dogri";
import { hindiToGujarati } from "./hindi_to_all/hindi_to_gujarati";
import { hindiToKannada } from "./hindi_to_all/hindi_to_kannada";
import { hindiToKashmiri } from "./hindi_to_all/hindi_to_kashmiri";
import { hindiToKonkani } from "./hindi_to_all/hindi_to_konkani";
import { hindiToMaithili } from "./hindi_to_all/hindi_to_maithili";
import { hindiToMalayalam } from "./hindi_to_all/hindi_to_malayalam";
import { hindiToManipuri } from "./hindi_to_all/hindi_to_manipuri";
import { hindiToMarathi } from "./hindi_to_all/hindi_to_marathi";
import { hindiToNepali } from "./hindi_to_all/hindi_to_nepali";
import { hindiToOdia } from "./hindi_to_all/hindi_to_odia";
import { hindiToPunjabi } from "./hindi_to_all/hindi_to_punjabi";
import { hindiToSanskrit } from "./hindi_to_all/hindi_to_sanskrit";
import { hindiToSantali } from "./hindi_to_all/hindi_to_santali";
import { hindiToSindhi } from "./hindi_to_all/hindi_to_sindhi";
import { hindiToTamil } from "./hindi_to_all/hindi_to_tamil";
import { hindiToTelugu } from "./hindi_to_all/hindi_to_telugu";
import { hindiToUrdu } from "./hindi_to_all/hindi_to_urdu";

// --- 2. ENGLISH TO ALL IMPORTS ---
import { englishToAssamese } from "./english_to_all/english_to_assamese";
import { englishToBengali } from "./english_to_all/english_to_bengali";
import { englishToBodo } from "./english_to_all/english_to_bodo";
import { englishToDogri } from "./english_to_all/english_to_dogri";
import { englishToGujarati } from "./english_to_all/english_to_gujarati";
import { englishToHindi } from "./english_to_all/english_to_hindi";
import { englishToKannada } from "./english_to_all/english_to_kannada";
import { englishToKashmiri } from "./english_to_all/english_to_kashmiri";
import { englishToKonkani } from "./english_to_all/english_to_konkani";
import { englishToMaithili } from "./english_to_all/english_to_maithili";
import { englishToMalayalam } from "./english_to_all/english_to_malayalam";
import { englishToManipuri } from "./english_to_all/english_to_manipuri";
import { englishToMarathi } from "./english_to_all/english_to_marathi";
import { englishToNepali } from "./english_to_all/english_to_nepali";
import { englishToOdia } from "./english_to_all/english_to_odia";
import { englishToPunjabi } from "./english_to_all/english_to_punjabi";
import { englishToSanskrit } from "./english_to_all/english_to_sanskrit";
import { englishToSantali } from "./english_to_all/english_to_santali";
import { englishToSindhi } from "./english_to_all/english_to_sindhi";
import { englishToTamil } from "./english_to_all/english_to_tamil";
import { englishToTelugu } from "./english_to_all/english_to_telugu";
import { englishToUrdu } from "./english_to_all/english_to_urdu";

// --- 3. MASTER DATA EXPORT ---
export const allLanguagesData: any = {
  "Hindi": {
    "Assamese": hindiToAssamese,
    "Bengali": hindiToBengali,
    "Bodo": hindiToBodo,
    "Dogri": hindiToDogri,
    "Gujarati": hindiToGujarati,
    "Kannada": hindiToKannada,
    "Kashmiri": hindiToKashmiri,
    "Konkani": hindiToKonkani,
    "Maithili": hindiToMaithili,
    "Malayalam": hindiToMalayalam,
    "Manipuri": hindiToManipuri,
    "Marathi": hindiToMarathi,
    "Nepali": hindiToNepali,
    "Odia": hindiToOdia,
    "Punjabi": hindiToPunjabi,
    "Sanskrit": hindiToSanskrit,
    "Santali": hindiToSantali,
    "Sindhi": hindiToSindhi,
    "Tamil": hindiToTamil,
    "Telugu": hindiToTelugu,
    "Urdu": hindiToUrdu,
  },
  "English": {
    "Assamese": englishToAssamese,
    "Bengali": englishToBengali,
    "Bodo": englishToBodo,
    "Dogri": englishToDogri,
    "Gujarati": englishToGujarati,
    "Hindi": englishToHindi,
    "Kannada": englishToKannada,
    "Kashmiri": englishToKashmiri,
    "Konkani": englishToKonkani,
    "Maithili": englishToMaithili,
    "Malayalam": englishToMalayalam,
    "Manipuri": englishToManipuri,
    "Marathi": englishToMarathi,
    "Nepali": englishToNepali,
    "Odia": englishToOdia,
    "Punjabi": englishToPunjabi,
    "Sanskrit": englishToSanskrit,
    "Santali": englishToSantali,
    "Sindhi": englishToSindhi,
    "Tamil": englishToTamil,
    "Telugu": englishToTelugu,
    "Urdu": englishToUrdu,
  }
};