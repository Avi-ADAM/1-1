// ================= CONFIGURATION =================
const STRAPI_URL = 'https://tovmeod.1lev1.com'; // כתובת השרת
const API_TOKEN = 'b6c844346fffdd19bcba4658eda64ac1169e24b8959fe9396398f177c754765fe773ecdebd3af267128b1779ea377e5e5488fb61a2a7c6efa9936f81bfcc836ffe559499efb76d879f2fbe3e5a84d7b7e043c90260df4ca41bfc4faa6b8458a8b480550de68a8182dff4ccd0b87edb9b99230d49e8ff3018ae34367dcb268ccb'; // הטוקן שיצרת באדמין
const COLLECTION_NAME = 'chezins'; // השם ברבים (Plural) כפי שמופיע ב-URL
const FIELD_NAME = 'fullAgreement'; // השם המדויק של השדה
const NEW_VALUE = true; // הערך שרוצים להגדיר
// =================================================
const PROXY_URL = 'http://localhost:5555'; 

async function updateAllEntries() {
  console.log('🚀 Starting update script...');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
  };

  try {
    // שלב 1: שליפת כל ה-IDs (כולל פגינציה)
    console.log('📥 Fetching all entries IDs...');
    let allIds = [];
    let page = 1;
    const pageSize = 100; // מקסימום יעילות
    let hasMore = true;

    while (hasMore) {
      // שליפה רק של שדה ה-ID כדי לחסוך רוחב פס
      const response = await fetch(
        `${STRAPI_URL}/api/${COLLECTION_NAME}?fields[0]=id&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, 
        { method: 'GET', headers }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch entries: ${response.statusText}`);
      }

      const result = await response.json();
      const entries = result.data;

      if (entries.length === 0) {
        hasMore = false;
      } else {
        const ids = entries.map((entry) => entry.id);
        allIds = [...allIds, ...ids];
        console.log(`   Fetched page ${page}: found ${ids.length} items.`);
        
        // בדיקה אם הגענו לסוף לפי המטא-דאטה של Strapi
        if (page >= result.meta.pagination.pageCount) {
            hasMore = false;
        }
        page++;
      }
    }

    console.log(`✅ Total entries found: ${allIds.length}`);

    if (allIds.length === 0) {
      console.log('No entries to update.');
      return;
    }

    // שלב 2: עדכון בלולאה
    console.log('🔄 Starting updates...');
    
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < allIds.length; i++) {
      const id = allIds[i];
      const currentItem = i + 1;
      
      try {
        const updateResponse = await fetch(`${STRAPI_URL}/api/${COLLECTION_NAME}/${id}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            data: {
              [FIELD_NAME]: NEW_VALUE
            }
          })
        });

        if (updateResponse.ok) {
          console.log(`[${currentItem}/${allIds.length}] ID ${id}: Updated successfully.`);
          successCount++;
        } else {
          const err = await updateResponse.json();
          console.error(`[${currentItem}/${allIds.length}] ID ${id}: FAILED.`, JSON.stringify(err));
          failCount++;
        }

      } catch (err) {
        console.error(`[${currentItem}/${allIds.length}] ID ${id}: ERROR.`, err.message);
        failCount++;
      }
    }

    // סיכום
    console.log('\n================ REPORT ================');
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Failed:  ${failCount}`);
    console.log('========================================');

  } catch (error) {
    console.error('🔥 Fatal Error:', error);
  }
}

// הרצת הפונקציה
updateAllEntries();