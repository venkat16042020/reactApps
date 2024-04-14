import { addItem } from "../Services/FoodItemServices";
import { useState } from "react";

const Item = () => {
  const [data, setData] = useState({
    itemId: "",
    itemName: "",
    rawCost: "",
    centralGST: "",
    stateGST: "",
    description: "",
    totalCost: "",
    totalGST: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newData = { ...data, [name]: value };

    if (name === "rawCost" || name === "stateGST" || name === "centralGST") {
      const totalCost =
        parseFloat(newData.rawCost || 0) +
        parseFloat(newData.stateGST || 0) +
        parseFloat(newData.centralGST || 0);
      newData = { ...newData, totalCost: totalCost.toFixed(2) };
    }

    if (name === "stateGST" || name === "centralGST") {
      const totalGST = parseFloat(newData.stateGST || 0) + parseFloat(newData.centralGST || 0);
      newData = { ...newData, totalGST: totalGST.toFixed(2) };
    }

    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = { ...data };

    try {
      const response = await addItem(itemData);
      console.log(response);
      console.log("itemData",itemData);

      setData({
        itemId: "",
        itemName: "",
        rawCost: "",
        centralGST: "",
        stateGST: "",
        description: "",
      
        totalCost: "",
        totalGST: ""
      });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleClear = () => {
    setData({
      itemId: "",
      itemName: "",
      rawCost: "",
      centralGST: "",
      stateGST: "",
      description: "",
     
      totalCost: "",
      totalGST: ""
    });
  };

  return (
    <div className="text-center" style={{ marginBottom: "20px" }}>
      <h3>Add Items</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Item ID:
            </label>
            <input type="text" name="itemId" value={data.itemId} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Item Name:
            </label>
            <input type="text" name="itemName" value={data.itemName} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Raw Cost:
            </label>
            <input type="text" name="rawCost" value={data.rawCost} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              State GST:
            </label>
            <input type="text" name="stateGST" value={data.stateGST} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Central GST:
            </label>
            <input type="text" name="centralGST" value={data.centralGST} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Description:
            </label>
            <input type="text" name="description" value={data.description} onChange={handleChange} />
          </div>
           <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Total Cost:
            </label>
            <input type="text" name="totalCost" value={data.totalCost} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-block", width: "100px", fontWeight: "bold", textAlign: "left" }}>
              Total GST:
            </label>
            <input type="text" name="totalGST" value={data.totalGST} onChange={handleChange} />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={{ backgroundColor: "green",marginRight:"15px" }}>
            Add
          </button>
          <button type="button" onClick={handleClear} style={{ backgroundColor: "red" }}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Item;
