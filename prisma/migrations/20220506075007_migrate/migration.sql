-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ph_no" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Contact" ("email", "firstName", "id", "lastName", "ph_no") SELECT "email", "firstName", "id", "lastName", "ph_no" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
