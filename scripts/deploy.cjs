const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const taxFee = 5;
  const Contract = await hre.ethers.getContractFactory("Liftup");
  const contract = await Contract.deploy(taxFee);

  await contract.deployed(); // ✅ correct lowercase

  const address = contract.address; // ✅ compatible with ethers v5

  // ✅ Create abis folder path
  const abisPath = path.join(__dirname, "..", "src", "abis");
  if (!fs.existsSync(abisPath)) {
    fs.mkdirSync(abisPath, { recursive: true });
  }

  // ✅ Save contract address
  const addressJSON = JSON.stringify({ address }, null, 4);
  fs.writeFileSync(path.join(abisPath, "contractAddress.json"), addressJSON, "utf8");
  console.log("✅ Deployed contract address:", address);

  // ✅ Save ABI
  const artifact = await hre.artifacts.readArtifact("Liftup");
  fs.writeFileSync(path.join(abisPath, "Liftup.json"), JSON.stringify(artifact, null, 2), "utf8");
  console.log("📦 ABI saved to src/abis/");
}

main().catch((error) => {
  console.error("Error in deployment:", error);
  process.exit(1);
});
