import streamlit as st

def show():
    st.title("Page 2 (Python)")
    st.write("This is a dynamic Python page in Streamlit.")
    user_input = st.text_input("Enter something:")
    st.write(f"You entered: {user_input}")

