//const { Box, Heading, Text, VStack } = require('@chakra-ui/react');
const React = require('react');
const { useSearchParams } = require("react-router-dom");

const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0];
    const referenceNum = seachQuery.get("reference");

    return (
        React.createElement( null,
            React.createElement({ h: "100vh", justifyContent: "center" },
                React.createElement( { textTransform: "uppercase" }, " Order Successfull"),
                React.createElement(Text, null, "Reference No.", referenceNum)
            )
        )
    );
};

module.exports = PaymentSuccess;
