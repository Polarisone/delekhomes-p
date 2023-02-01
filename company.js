
function createTestCases() {
    const industries = ["Business Services", "Communications", "Computer Hardware", "Computer Software", "Construction", "Food and Tobacco Manufacturing", "Information Services", "Mining and Extraction", "Printing and Publishing", "Retail", "Travel", "Utilities", "Wholesale"];
    const regionCodes = {"Australia": "A1", "Oceania": "A3" , "East Asia": "B5", "South Asia": "B15", "North Africa": "C8", "Central Africa": "C32", "South Africa": "C38", "Middle East": "D29", "East Europe": "E91", "West Europe": "E33", "North America": "F53", "Central America": "F57", "South America": "F62"};
    const companySizes = {"Small": 1, "Medium": 2, "Large": 3, "Global": 4};

    let testCases = [];
    for (let i = 1; i <= 20; i++) {
        let test = {
            "company_id": Math.floor(Math.random() * (999999 - 100000 + 1) + 100000),
            "company_name": `TestCompany_${i}`,
            "company_size": Math.floor(Math.random() * 4) + 1,
            "target_industries": [...new Set(Array.from({length: Math.floor(Math.random() * 2) + 1}, () => industries[Math.floor(Math.random() * industries.length)]))],
            "target_region_id": Object.values(regionCodes)[Math.floor(Math.random() * Object.values(regionCodes).length)]
        }
        testCases.push(test);
    }

    // Special test cases
    testCases.push({
        "company_id": 123456,
        "company_name": "ConstructionCo",
        "company_size": 4,
        "target_industries": ["Construction"],
        "target_region_id": "C38"
    });
    testCases.push({
        "company_id": 123456,
        "company_name": "ConstructionCo",
        "company_size": 4,
        "target_industries": ["Construction"],
        "target_region_id": "C38"
    });
};
