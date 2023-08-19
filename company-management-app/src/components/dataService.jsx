import { db } from "../firebase"; // Update the import path
import { ref, push, get, remove } from "firebase/database"; // Import Realtime Database functions

// Function to get all companies from the Realtime Database
export const getAllCompanies = async () => {
  try {
    const companiesRef = ref(db, "companies");
    const companiesSnapshot = await get(companiesRef);
    const companies = [];
    companiesSnapshot.forEach((childSnapshot) => {
      companies.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

// Function to add a new company to the Realtime Database
export const addCompany = (newCompany) => {
  const companiesRef = ref(db, "companies");
  push(companiesRef, newCompany); // Use push to add a new item
};

// ... (your other functions)

export const searchCompanies = async (query) => {
  const searchTerm = query.toLowerCase().trim();

  try {
    const snapshot = await get(ref(db, "companies"));
    const companiesData = snapshot.val();

    const matchedCompanies = Object.keys(companiesData)
      .map((key) => ({
        id: key,
        ...companiesData[key],
      }))
      .filter(
        (company) =>
          company.companyName.toLowerCase() === searchTerm ||
          company.contactPerson.toLowerCase() === searchTerm
      );

    return matchedCompanies;
  } catch (error) {
    console.error("Error searching companies:", error);
    return [];
  }
};


export const deleteCompany = async (companyId) => {
  try {
    await remove(ref(db, `companies/${companyId}`));
    console.log("Company deleted successfully");
  } catch (error) {
    console.error("Error deleting company:", error);
  }
};