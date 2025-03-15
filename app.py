import streamlit as st

# Custom CSS for the header
st.markdown(
    """
    <style>
        .custom-header {
            background-color: #3498db;  /* Header background */
            color: white;               /* Text color */
            padding: 15px;              /* Padding */
            font-size: 24px;            /* Font size */
            font-weight: bold;          /* Bold text */
            border-radius: 5px;         /* Rounded corners */
            text-align: left;           /* Left-aligned text */
        }
        
        .sidebar-container {
            background-color: #f4f4f4;  /* Sidebar background */
            padding: 15px;
            border-radius: 5px;
        }
    </style>
    """,
    unsafe_allow_html=True
)

# Display the header
st.markdown('<div class="custom-header">📌 My Streamlit App</div>', unsafe_allow_html=True)

# Create layout: Sidebar under the header using columns
col1, col2 = st.columns([1, 3])

with col1:
    st.markdown('<div class="sidebar-container">', unsafe_allow_html=True)
    st.subheader("Sidebar Menu")
    option = st.radio("Go to", ["Home", "Page 1", "Page 2"])
    st.markdown('</div>', unsafe_allow_html=True)

with col2:
    st.write("This is the main content area.")

    if option == "Home":
        st.write("Welcome to the homepage!")
    elif option == "Page 1":
        st.write("This is Page 1 content.")
    elif option == "Page 2":
        st.write("This is Page 2 content.")
