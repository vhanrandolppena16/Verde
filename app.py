# Main App Framework
import streamlit as st

st.set_page_config(page_title="Hybrid Streamlit App", layout="wide")

# Function to read and display an HTML file
def load_html(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()

st.title("Home Page")
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["Home", "Page 1 (HTML)", "Page 2 (Python)"])

if page == "Page 1 (HTML)":
    st.components.v1.html(load_html("pages/page-1.html"), height=500, scrolling=True)

elif page == "Page 2 (Python)":
    from pages import page2  # Import Python page
    page2.show()
    
