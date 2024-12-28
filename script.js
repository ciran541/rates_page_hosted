
// Table data
const fixedRatesData = [
    {
      bank: 'Contact Us',
      loanType: '2/1',
      rates: ['2.65%', '1MSORA + 0.45%', '1MSORA + 0.50%', '1MSORA + 1.00%', '1MSORA + 1.00%', '1MSORA + 1.00%'],
      types: ['fixed', '', '', '', '', '']
    },
    {
      bank: 'Contact Us',
      loanType: '2/2',
      rates: ['2.50%', '2.38%', '3MSORA + 0.50%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: ['fixed', 'fixed', '', '', '', '']
    },
    {
      bank: 'Contact Us',
      loanType: '2/1',
      rates: ['2.50%', '2.50%', '3MSORA + 0.80%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: ['fixed', 'fixed', '', '', '', '']
    },
    {
      bank: 'Contact Us',
      loanType: '2/2',
      rates: ['2.48%', '2.48%', '3MSORA + 0.70%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: ['fixed', 'fixed', '', '', '', '']
    },
    {
      bank: 'Contact Us',
      loanType: '3/3',
      rates: ['2.45%', '2.45%', '2.45%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: ['fixed', 'fixed', 'fixed', '', '', '']
    }
  ];
  
  const floatingRatesData = [
    {
      bank: 'Contact Us',
      loanType: '2/Anytime',
      rates: ['1MSORA + 0.20%', '1MSORA + 0.25%', '1MSORA + 0.30%', '1MSORA + 0.60%', '1MSORA + 0.60%', '1MSORA + 0.60%'],
      types: Array(6).fill('')
    },
    {
      bank: 'Contact Us',
      loanType: '2/Anytime',
      rates: ['1MSORA + 0.25%', '1MSORA + 0.30%', '1MSORA + 0.35%', '1MSORA + 0.65%', '1MSORA + 0.65%', '1MSORA + 0.65%'],
      types: Array(6).fill('')
    },
    {
      bank: 'SCB',
      loanType: '2/2',
      rates: ['3MSORA + 0.45%', '3MSORA + 0.45%', '3MSORA + 0.50%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: Array(6).fill('')
    },
    {
      bank: 'Maybank',
      loanType: '1/1',
      rates: ['3MSORA + 0.50%', '3MSORA + 0.50%', '3MSORA + 0.50%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: Array(6).fill('')
    },
    {
      bank: 'Maybank',
      loanType: '1/1',
      rates: ['3MSORA + 0.55%', '3MSORA + 0.55%', '3MSORA + 0.55%', '3MSORA + 1.00%', '3MSORA + 1.00%', '3MSORA + 1.00%'],
      types: Array(6).fill('')
    }
  ];
  
  const uncompletedPropertiesData = [
    {
      bank: 'Contact Us',
      loanType: 'Nil',
      rates: ['3MSORA + 0.30%', '3MSORA + 0.30%', '3MSORA + 0.30%', '3MSORA + 0.30%', '3MSORA + 0.60%', '3MSORA + 0.60%']
    },
    {
      bank: 'Contact Us',
      loanType: 'Nil',
      rates: ['1MSORA + 0.30%', '1MSORA + 0.30%', '1MSORA + 0.30%', '1MSORA + 0.30%', '1MSORA + 0.60%', '1MSORA + 0.60%']
    },
    {
      bank: 'Contact Us',
      loanType: 'Nil',
      rates: ['3MSORA + 0.30%', '3MSORA + 0.30%', '3MSORA + 0.35%', '3MSORA + 0.35%', '3MSORA + 0.60%', '3MSORA + 0.60%']
    },
    {
      bank: 'Contact Us',
      loanType: 'Nil',
      rates: ['1MSORA + 0.38%', '1MSORA + 0.38%', '1MSORA + 0.38%', '1MSORA + 0.38%', '1MSORA + 1.00%', '1MSORA + 1.00%']
    },
    {
      bank: 'DBS',
      loanType: 'Nil',
      rates: ['FHR6 + 1.00%', 'FHR6 + 1.00%', 'FHR6 + 1.00%', 'FHR6 + 1.00%', 'FHR6 + 1.00%', 'FHR6 + 1.00%']
    }
  ];

 // Utility functions
const dateFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

const formatDate = (date) => date.toLocaleDateString('en-US', dateFormatOptions);

// DOM manipulation functions
const updateElementText = (elementId, text) => {
    const element = document.getElementById(elementId);
    if (element) element.textContent = text;
};

const updateAllDateHeaders = () => {
    const formattedDate = formatDate(new Date());
    document.querySelectorAll('.date-header').forEach(header => {
        header.textContent = `Updated as of ${formattedDate}`;
    });
};

// Table population functions
const createTableRow = (row) => {
    const ratesHtml = row.rates.map((rate, i) => `
        <td>
            <div class="rate">${rate}</div>
            ${row.types ? `<div class="type">${row.types[i] || ''}</div>` : ''}
        </td>
    `).join('');

    return `
        <tr>
            <td class="promo">${row.bank}</td>
            <td>${row.loanType}</td>
            ${ratesHtml}
        </tr>
    `;
};

const populateTable = (tableId, data) => {
    const tbody = document.querySelector(`#${tableId} tbody`);
    if (tbody) {
        tbody.innerHTML = data.map(createTableRow).join('');
    }
};

// Event handlers
const handleTableToggle = (event) => {
    if (!event.target.classList.contains('toggle-btn')) return;

    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const tableType = event.target.dataset.table;
    const fixedTable = document.getElementById('fixed-table');
    const floatingTable = document.getElementById('floating-table');

    if (fixedTable) fixedTable.style.display = tableType === 'fixed' ? 'table' : 'none';
    if (floatingTable) floatingTable.style.display = tableType === 'floating' ? 'table' : 'none';
};

// Initialization function
const initializePage = () => {
    // Update all dates
    updateAllDateHeaders();
    updateElementText('soraUpdateDate', `Updated as of ${formatDate(new Date())}`);

    // Populate tables
    populateTable('fixed-table', fixedRatesData);
    populateTable('floating-table', floatingRatesData);
    populateTable('uncompleted-table', uncompletedPropertiesData);

    // Add event listener for table toggle
    const toggleContainer = document.querySelector('.toggle-buttons');
    if (toggleContainer) {
        toggleContainer.addEventListener('click', handleTableToggle);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
