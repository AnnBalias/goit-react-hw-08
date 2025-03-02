import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://67b712902bddacfb270d87fd.mockapi.io/contacts"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `https://67b712902bddacfb270d87fd.mockapi.io/contacts`,
        body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delData",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://67b712902bddacfb270d87fd.mockapi.io/contacts/${id}`
      );
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
